package openapisdk.models.operations;



public class StartJobRunResponse {
    public Object concurrentRunsExceededException;
    public StartJobRunResponse withConcurrentRunsExceededException(Object concurrentRunsExceededException) {
        this.concurrentRunsExceededException = concurrentRunsExceededException;
        return this;
    }
    public String contentType;
    public StartJobRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public StartJobRunResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object internalServiceException;
    public StartJobRunResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public StartJobRunResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public StartJobRunResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Object resourceNumberLimitExceededException;
    public StartJobRunResponse withResourceNumberLimitExceededException(Object resourceNumberLimitExceededException) {
        this.resourceNumberLimitExceededException = resourceNumberLimitExceededException;
        return this;
    }
    public openapisdk.models.shared.StartJobRunResponse startJobRunResponse;
    public StartJobRunResponse withStartJobRunResponse(openapisdk.models.shared.StartJobRunResponse startJobRunResponse) {
        this.startJobRunResponse = startJobRunResponse;
        return this;
    }
    public Long statusCode;
    public StartJobRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}