let btn = document.getElementById("btnCalculate");

let result = document.getElementById("result");
let numOneError = document.getElementById("numOneError");
let numTwoError = document.getElementById("numTwoError");
let operationError = document.getElementById("operatorError");
let finalResult;

let numOneStatus, numTwoStatus, operatorStatus = false;

numOneError.style.display = "none";

numTwoError.style.display = "none";

operatorError.style.display = "none";

btn.addEventListener("click", function() {
    let num1 = document.getElementById("firstnum");
    let num2 = document.getElementById("secnum");
    let operator = document.getElementById("operation");

    checkValidation(num1, num2, operator);

    num1 = parseInt(num1.value);
    num2 = parseInt(num2.value);


    if (numOneStatus == false && numTwoStatus == false && operatorStatus == false) {
        switch (operator.value) {
            case 'add':
                finalResult = num1 + num2;
                break;

            case 'minus':
                finalResult = num1 - num2;
                break;

            case 'multiply':
                finalResult = num1 * num2;
                break;

            case 'division':
                finalResult = num1 / num2;
                break;

            case 'modulus':
                finalResult = num1 % num2;
                break;

            case 'deafult':
                console.log("operation error")
                break;


        }
        result.innerHTML = finalResult;
    }

});

function checkValidation(num1, num2, operator) {
    if (num1.value == "" || num1.value == "null" || num1.value == "undefied") {
        numOneError.style.display = "block";
        numOneStatus = true;
    } else {
        numOneError.style.display = "none";
        numOneStatus = false;
    }

    if (num1.value == "" || num1.value == "null" || num1.value == "undefied") {
        numTwoError.style.display = "block";
        numTwoStatus = true;
    } else {
        numTwoError.style.display = "none";
        numTwoStatus = false;
    }

    if (operator.value == "empty") {
        operatorError.style.display = "block";
        operatorStatus = true;
    } else {
        operatorError.style.display = "none";
        operatorStatus = false;
    }
}