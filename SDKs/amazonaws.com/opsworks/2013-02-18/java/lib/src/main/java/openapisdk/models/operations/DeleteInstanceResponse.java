package openapisdk.models.operations;



public class DeleteInstanceResponse {
    public String contentType;
    public DeleteInstanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteInstanceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteInstanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeleteInstanceResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}