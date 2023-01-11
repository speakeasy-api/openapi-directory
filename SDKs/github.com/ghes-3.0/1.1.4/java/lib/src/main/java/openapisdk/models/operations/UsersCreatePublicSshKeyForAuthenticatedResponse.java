package openapisdk.models.operations;



public class UsersCreatePublicSshKeyForAuthenticatedResponse {
    public String contentType;
    public UsersCreatePublicSshKeyForAuthenticatedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UsersCreatePublicSshKeyForAuthenticatedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public UsersCreatePublicSshKeyForAuthenticatedResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Key key;
    public UsersCreatePublicSshKeyForAuthenticatedResponse withKey(openapisdk.models.shared.Key key) {
        this.key = key;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public UsersCreatePublicSshKeyForAuthenticatedResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}