package openapisdk.models.operations;



public class PostAppsAppIdKeysKeyIdRevokeResponse {
    public String contentType;
    public PostAppsAppIdKeysKeyIdRevokeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostAppsAppIdKeysKeyIdRevokeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public PostAppsAppIdKeysKeyIdRevokeResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
}