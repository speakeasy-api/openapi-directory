package openapisdk.models.operations;



public class UsersDeletePublicSshKeyForAuthenticatedResponse {
    public String contentType;
    public UsersDeletePublicSshKeyForAuthenticatedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UsersDeletePublicSshKeyForAuthenticatedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public UsersDeletePublicSshKeyForAuthenticatedResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
}