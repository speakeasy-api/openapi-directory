package openapisdk.models.operations;



public class DeleteUserProfileResponse {
    public String contentType;
    public DeleteUserProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteUserProfileResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteUserProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeleteUserProfileResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}