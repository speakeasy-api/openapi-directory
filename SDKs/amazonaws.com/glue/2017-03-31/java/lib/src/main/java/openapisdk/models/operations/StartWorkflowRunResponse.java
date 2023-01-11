package openapisdk.models.operations;



public class StartWorkflowRunResponse {
    public Object concurrentRunsExceededException;
    public StartWorkflowRunResponse withConcurrentRunsExceededException(Object concurrentRunsExceededException) {
        this.concurrentRunsExceededException = concurrentRunsExceededException;
        return this;
    }
    public String contentType;
    public StartWorkflowRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public StartWorkflowRunResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object internalServiceException;
    public StartWorkflowRunResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public StartWorkflowRunResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public StartWorkflowRunResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Object resourceNumberLimitExceededException;
    public StartWorkflowRunResponse withResourceNumberLimitExceededException(Object resourceNumberLimitExceededException) {
        this.resourceNumberLimitExceededException = resourceNumberLimitExceededException;
        return this;
    }
    public openapisdk.models.shared.StartWorkflowRunResponse startWorkflowRunResponse;
    public StartWorkflowRunResponse withStartWorkflowRunResponse(openapisdk.models.shared.StartWorkflowRunResponse startWorkflowRunResponse) {
        this.startWorkflowRunResponse = startWorkflowRunResponse;
        return this;
    }
    public Long statusCode;
    public StartWorkflowRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}