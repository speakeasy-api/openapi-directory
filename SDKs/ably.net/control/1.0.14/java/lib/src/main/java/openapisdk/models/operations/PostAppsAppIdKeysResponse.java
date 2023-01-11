package openapisdk.models.operations;



public class PostAppsAppIdKeysResponse {
    public String contentType;
    public PostAppsAppIdKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostAppsAppIdKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public PostAppsAppIdKeysResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.KeyResponse keyResponse;
    public PostAppsAppIdKeysResponse withKeyResponse(openapisdk.models.shared.KeyResponse keyResponse) {
        this.keyResponse = keyResponse;
        return this;
    }
}