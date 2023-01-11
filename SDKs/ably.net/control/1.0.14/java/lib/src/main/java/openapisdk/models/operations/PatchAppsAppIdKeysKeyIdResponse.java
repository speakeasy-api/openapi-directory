package openapisdk.models.operations;



public class PatchAppsAppIdKeysKeyIdResponse {
    public String contentType;
    public PatchAppsAppIdKeysKeyIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PatchAppsAppIdKeysKeyIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public PatchAppsAppIdKeysKeyIdResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.KeyResponse keyResponse;
    public PatchAppsAppIdKeysKeyIdResponse withKeyResponse(openapisdk.models.shared.KeyResponse keyResponse) {
        this.keyResponse = keyResponse;
        return this;
    }
}