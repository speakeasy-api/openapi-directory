package openapisdk.models.operations;



public class UsersListGpgKeysForUserResponse {
    public String contentType;
    public UsersListGpgKeysForUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public UsersListGpgKeysForUserResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public UsersListGpgKeysForUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.GpgKey[] gpgKeys;
    public UsersListGpgKeysForUserResponse withGpgKeys(openapisdk.models.shared.GpgKey[] gpgKeys) {
        this.gpgKeys = gpgKeys;
        return this;
    }
}