package openapisdk.models.operations;



public class UsersGetGpgKeyForAuthenticatedResponse {
    public String contentType;
    public UsersGetGpgKeyForAuthenticatedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UsersGetGpgKeyForAuthenticatedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public UsersGetGpgKeyForAuthenticatedResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.GpgKey gpgKey;
    public UsersGetGpgKeyForAuthenticatedResponse withGpgKey(openapisdk.models.shared.GpgKey gpgKey) {
        this.gpgKey = gpgKey;
        return this;
    }
}