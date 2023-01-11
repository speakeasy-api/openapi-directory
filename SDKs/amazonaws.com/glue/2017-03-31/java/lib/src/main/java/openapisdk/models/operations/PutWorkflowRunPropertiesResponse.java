package openapisdk.models.operations;



public class PutWorkflowRunPropertiesResponse {
    public Object alreadyExistsException;
    public PutWorkflowRunPropertiesResponse withAlreadyExistsException(Object alreadyExistsException) {
        this.alreadyExistsException = alreadyExistsException;
        return this;
    }
    public Object concurrentModificationException;
    public PutWorkflowRunPropertiesResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public PutWorkflowRunPropertiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public PutWorkflowRunPropertiesResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object internalServiceException;
    public PutWorkflowRunPropertiesResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public PutWorkflowRunPropertiesResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public PutWorkflowRunPropertiesResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public java.util.Map<String, Object> putWorkflowRunPropertiesResponse;
    public PutWorkflowRunPropertiesResponse withPutWorkflowRunPropertiesResponse(java.util.Map<String, Object> putWorkflowRunPropertiesResponse) {
        this.putWorkflowRunPropertiesResponse = putWorkflowRunPropertiesResponse;
        return this;
    }
    public Object resourceNumberLimitExceededException;
    public PutWorkflowRunPropertiesResponse withResourceNumberLimitExceededException(Object resourceNumberLimitExceededException) {
        this.resourceNumberLimitExceededException = resourceNumberLimitExceededException;
        return this;
    }
    public Long statusCode;
    public PutWorkflowRunPropertiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}