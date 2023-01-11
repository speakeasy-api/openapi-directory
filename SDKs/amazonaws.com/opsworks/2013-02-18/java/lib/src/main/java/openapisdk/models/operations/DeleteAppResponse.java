package openapisdk.models.operations;



public class DeleteAppResponse {
    public String contentType;
    public DeleteAppResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteAppResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteAppResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeleteAppResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}