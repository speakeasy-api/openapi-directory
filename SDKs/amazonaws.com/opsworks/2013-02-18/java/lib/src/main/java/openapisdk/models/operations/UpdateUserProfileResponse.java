package openapisdk.models.operations;



public class UpdateUserProfileResponse {
    public String contentType;
    public UpdateUserProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateUserProfileResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateUserProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public UpdateUserProfileResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}