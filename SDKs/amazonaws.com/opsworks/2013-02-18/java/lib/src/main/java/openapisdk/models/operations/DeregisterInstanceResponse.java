package openapisdk.models.operations;



public class DeregisterInstanceResponse {
    public String contentType;
    public DeregisterInstanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object resourceNotFoundException;
    public DeregisterInstanceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeregisterInstanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeregisterInstanceResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}