package openapisdk.models.operations;



public class CreateUserProfileResponse {
    public String contentType;
    public CreateUserProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateUserProfileResult createUserProfileResult;
    public CreateUserProfileResponse withCreateUserProfileResult(openapisdk.models.shared.CreateUserProfileResult createUserProfileResult) {
        this.createUserProfileResult = createUserProfileResult;
        return this;
    }
    public Long statusCode;
    public CreateUserProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object userProfileAlreadyExistsException;
    public CreateUserProfileResponse withUserProfileAlreadyExistsException(Object userProfileAlreadyExistsException) {
        this.userProfileAlreadyExistsException = userProfileAlreadyExistsException;
        return this;
    }
    public Object validationException;
    public CreateUserProfileResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}