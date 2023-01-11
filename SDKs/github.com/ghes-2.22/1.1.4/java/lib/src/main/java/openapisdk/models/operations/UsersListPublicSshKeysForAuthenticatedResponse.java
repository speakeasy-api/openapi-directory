package openapisdk.models.operations;



public class UsersListPublicSshKeysForAuthenticatedResponse {
    public String contentType;
    public UsersListPublicSshKeysForAuthenticatedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public UsersListPublicSshKeysForAuthenticatedResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public UsersListPublicSshKeysForAuthenticatedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public UsersListPublicSshKeysForAuthenticatedResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Key[] keys;
    public UsersListPublicSshKeysForAuthenticatedResponse withKeys(openapisdk.models.shared.Key[] keys) {
        this.keys = keys;
        return this;
    }
}