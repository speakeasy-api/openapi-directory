package openapisdk.models.operations;



public class UpdateStackResponse {
    public String contentType;
    public UpdateStackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateStackResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateStackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public UpdateStackResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}