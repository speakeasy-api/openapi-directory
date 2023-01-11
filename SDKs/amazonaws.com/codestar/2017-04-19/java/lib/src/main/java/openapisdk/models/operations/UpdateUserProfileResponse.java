package openapisdk.models.operations;



public class UpdateUserProfileResponse {
    public String contentType;
    public UpdateUserProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateUserProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateUserProfileResult updateUserProfileResult;
    public UpdateUserProfileResponse withUpdateUserProfileResult(openapisdk.models.shared.UpdateUserProfileResult updateUserProfileResult) {
        this.updateUserProfileResult = updateUserProfileResult;
        return this;
    }
    public Object userProfileNotFoundException;
    public UpdateUserProfileResponse withUserProfileNotFoundException(Object userProfileNotFoundException) {
        this.userProfileNotFoundException = userProfileNotFoundException;
        return this;
    }
    public Object validationException;
    public UpdateUserProfileResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}