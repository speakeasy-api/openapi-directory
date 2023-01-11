package openapisdk.models.operations;



public class StopInstanceResponse {
    public String contentType;
    public StopInstanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object resourceNotFoundException;
    public StopInstanceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public StopInstanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public StopInstanceResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}