package openapisdk.models.operations;



public class RebootInstanceResponse {
    public String contentType;
    public RebootInstanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object resourceNotFoundException;
    public RebootInstanceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public RebootInstanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public RebootInstanceResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}