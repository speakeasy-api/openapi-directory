package openapisdk.models.operations;



public class UpdateAppResponse {
    public String contentType;
    public UpdateAppResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateAppResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateAppResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public UpdateAppResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}