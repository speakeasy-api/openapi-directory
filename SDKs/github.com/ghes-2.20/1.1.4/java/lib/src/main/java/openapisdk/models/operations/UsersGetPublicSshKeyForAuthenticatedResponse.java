package openapisdk.models.operations;



public class UsersGetPublicSshKeyForAuthenticatedResponse {
    public String contentType;
    public UsersGetPublicSshKeyForAuthenticatedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UsersGetPublicSshKeyForAuthenticatedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public UsersGetPublicSshKeyForAuthenticatedResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Key key;
    public UsersGetPublicSshKeyForAuthenticatedResponse withKey(openapisdk.models.shared.Key key) {
        this.key = key;
        return this;
    }
}