package openapisdk.models.operations;



public class StartStackResponse {
    public String contentType;
    public StartStackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object resourceNotFoundException;
    public StartStackResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public StartStackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public StartStackResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}