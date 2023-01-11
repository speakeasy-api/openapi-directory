package openapisdk.models.operations;



public class DeleteConnectionResponse {
    public String contentType;
    public DeleteConnectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteConnectionResponse;
    public DeleteConnectionResponse withDeleteConnectionResponse(java.util.Map<String, Object> deleteConnectionResponse) {
        this.deleteConnectionResponse = deleteConnectionResponse;
        return this;
    }
    public Object entityNotFoundException;
    public DeleteConnectionResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object operationTimeoutException;
    public DeleteConnectionResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public DeleteConnectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}