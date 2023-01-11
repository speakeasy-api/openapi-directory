package openapisdk.models.operations;



public class StartInstanceResponse {
    public String contentType;
    public StartInstanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object resourceNotFoundException;
    public StartInstanceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public StartInstanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public StartInstanceResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}