package openapisdk.models.operations;



public class UnassignInstanceResponse {
    public String contentType;
    public UnassignInstanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object resourceNotFoundException;
    public UnassignInstanceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UnassignInstanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public UnassignInstanceResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}