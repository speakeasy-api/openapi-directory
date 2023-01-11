package openapisdk.models.operations;



public class UsersUpdateAuthenticatedResponse {
    public String contentType;
    public UsersUpdateAuthenticatedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UsersUpdateAuthenticatedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public UsersUpdateAuthenticatedResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.PrivateUser privateUser;
    public UsersUpdateAuthenticatedResponse withPrivateUser(openapisdk.models.shared.PrivateUser privateUser) {
        this.privateUser = privateUser;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public UsersUpdateAuthenticatedResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}