package openapisdk.models.operations;



public class SetPermissionResponse {
    public String contentType;
    public SetPermissionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object resourceNotFoundException;
    public SetPermissionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public SetPermissionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public SetPermissionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}