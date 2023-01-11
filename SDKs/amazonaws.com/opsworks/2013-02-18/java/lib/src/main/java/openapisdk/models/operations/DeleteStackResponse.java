package openapisdk.models.operations;



public class DeleteStackResponse {
    public String contentType;
    public DeleteStackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteStackResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteStackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeleteStackResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}