package openapisdk.models.operations;



public class UsersListGpgKeysForAuthenticatedResponse {
    public String contentType;
    public UsersListGpgKeysForAuthenticatedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public UsersListGpgKeysForAuthenticatedResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public UsersListGpgKeysForAuthenticatedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public UsersListGpgKeysForAuthenticatedResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.GpgKey[] gpgKeys;
    public UsersListGpgKeysForAuthenticatedResponse withGpgKeys(openapisdk.models.shared.GpgKey[] gpgKeys) {
        this.gpgKeys = gpgKeys;
        return this;
    }
}