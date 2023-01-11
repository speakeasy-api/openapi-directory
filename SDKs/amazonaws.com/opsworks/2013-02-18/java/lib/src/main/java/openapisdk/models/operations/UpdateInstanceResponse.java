package openapisdk.models.operations;



public class UpdateInstanceResponse {
    public String contentType;
    public UpdateInstanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateInstanceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateInstanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public UpdateInstanceResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}