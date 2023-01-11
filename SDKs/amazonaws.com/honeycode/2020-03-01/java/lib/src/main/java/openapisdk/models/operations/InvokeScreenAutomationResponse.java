package openapisdk.models.operations;



public class InvokeScreenAutomationResponse {
    public Object accessDeniedException;
    public InvokeScreenAutomationResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object automationExecutionException;
    public InvokeScreenAutomationResponse withAutomationExecutionException(Object automationExecutionException) {
        this.automationExecutionException = automationExecutionException;
        return this;
    }
    public Object automationExecutionTimeoutException;
    public InvokeScreenAutomationResponse withAutomationExecutionTimeoutException(Object automationExecutionTimeoutException) {
        this.automationExecutionTimeoutException = automationExecutionTimeoutException;
        return this;
    }
    public String contentType;
    public InvokeScreenAutomationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public InvokeScreenAutomationResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.InvokeScreenAutomationResult invokeScreenAutomationResult;
    public InvokeScreenAutomationResponse withInvokeScreenAutomationResult(openapisdk.models.shared.InvokeScreenAutomationResult invokeScreenAutomationResult) {
        this.invokeScreenAutomationResult = invokeScreenAutomationResult;
        return this;
    }
    public Object requestTimeoutException;
    public InvokeScreenAutomationResponse withRequestTimeoutException(Object requestTimeoutException) {
        this.requestTimeoutException = requestTimeoutException;
        return this;
    }
    public Object resourceNotFoundException;
    public InvokeScreenAutomationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public InvokeScreenAutomationResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public InvokeScreenAutomationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public InvokeScreenAutomationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public InvokeScreenAutomationResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}