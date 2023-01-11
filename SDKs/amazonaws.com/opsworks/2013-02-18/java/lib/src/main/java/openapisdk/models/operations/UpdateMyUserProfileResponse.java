package openapisdk.models.operations;



public class UpdateMyUserProfileResponse {
    public String contentType;
    public UpdateMyUserProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateMyUserProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public UpdateMyUserProfileResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}