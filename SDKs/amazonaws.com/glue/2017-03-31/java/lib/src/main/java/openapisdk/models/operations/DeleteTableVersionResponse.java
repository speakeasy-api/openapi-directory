package openapisdk.models.operations;



public class DeleteTableVersionResponse {
    public String contentType;
    public DeleteTableVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteTableVersionResponse;
    public DeleteTableVersionResponse withDeleteTableVersionResponse(java.util.Map<String, Object> deleteTableVersionResponse) {
        this.deleteTableVersionResponse = deleteTableVersionResponse;
        return this;
    }
    public Object entityNotFoundException;
    public DeleteTableVersionResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object internalServiceException;
    public DeleteTableVersionResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public DeleteTableVersionResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public DeleteTableVersionResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public DeleteTableVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}