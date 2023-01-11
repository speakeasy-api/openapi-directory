package openapisdk.models.operations;



public class CancelSchemaExtensionResponse {
    public java.util.Map<String, Object> cancelSchemaExtensionResult;
    public CancelSchemaExtensionResponse withCancelSchemaExtensionResult(java.util.Map<String, Object> cancelSchemaExtensionResult) {
        this.cancelSchemaExtensionResult = cancelSchemaExtensionResult;
        return this;
    }
    public Object clientException;
    public CancelSchemaExtensionResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public CancelSchemaExtensionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityDoesNotExistException;
    public CancelSchemaExtensionResponse withEntityDoesNotExistException(Object entityDoesNotExistException) {
        this.entityDoesNotExistException = entityDoesNotExistException;
        return this;
    }
    public Object serviceException;
    public CancelSchemaExtensionResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public CancelSchemaExtensionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}