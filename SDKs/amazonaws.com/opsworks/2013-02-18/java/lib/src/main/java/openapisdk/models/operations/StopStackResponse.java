package openapisdk.models.operations;



public class StopStackResponse {
    public String contentType;
    public StopStackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object resourceNotFoundException;
    public StopStackResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public StopStackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public StopStackResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}