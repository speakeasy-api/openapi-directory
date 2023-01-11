package openapisdk.models.operations;



public class DeleteTableResponse {
    public Object concurrentModificationException;
    public DeleteTableResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public DeleteTableResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteTableResponse;
    public DeleteTableResponse withDeleteTableResponse(java.util.Map<String, Object> deleteTableResponse) {
        this.deleteTableResponse = deleteTableResponse;
        return this;
    }
    public Object entityNotFoundException;
    public DeleteTableResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object internalServiceException;
    public DeleteTableResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public DeleteTableResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public DeleteTableResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public DeleteTableResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}