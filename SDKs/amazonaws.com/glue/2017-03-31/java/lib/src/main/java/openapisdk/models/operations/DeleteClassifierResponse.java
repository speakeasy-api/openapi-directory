package openapisdk.models.operations;



public class DeleteClassifierResponse {
    public String contentType;
    public DeleteClassifierResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteClassifierResponse;
    public DeleteClassifierResponse withDeleteClassifierResponse(java.util.Map<String, Object> deleteClassifierResponse) {
        this.deleteClassifierResponse = deleteClassifierResponse;
        return this;
    }
    public Object entityNotFoundException;
    public DeleteClassifierResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object operationTimeoutException;
    public DeleteClassifierResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public DeleteClassifierResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}