package openapisdk.models.operations;



public class StartTriggerResponse {
    public Object concurrentRunsExceededException;
    public StartTriggerResponse withConcurrentRunsExceededException(Object concurrentRunsExceededException) {
        this.concurrentRunsExceededException = concurrentRunsExceededException;
        return this;
    }
    public String contentType;
    public StartTriggerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public StartTriggerResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object internalServiceException;
    public StartTriggerResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public StartTriggerResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public StartTriggerResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Object resourceNumberLimitExceededException;
    public StartTriggerResponse withResourceNumberLimitExceededException(Object resourceNumberLimitExceededException) {
        this.resourceNumberLimitExceededException = resourceNumberLimitExceededException;
        return this;
    }
    public openapisdk.models.shared.StartTriggerResponse startTriggerResponse;
    public StartTriggerResponse withStartTriggerResponse(openapisdk.models.shared.StartTriggerResponse startTriggerResponse) {
        this.startTriggerResponse = startTriggerResponse;
        return this;
    }
    public Long statusCode;
    public StartTriggerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}