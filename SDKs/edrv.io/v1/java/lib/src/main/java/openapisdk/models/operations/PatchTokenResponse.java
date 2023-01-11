package openapisdk.models.operations;



public class PatchTokenResponse {
    public String contentType;
    public PatchTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PatchTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PatchToken201ApplicationJson patchToken201ApplicationJSONObject;
    public PatchTokenResponse withPatchToken201ApplicationJsonObject(PatchToken201ApplicationJson patchToken201ApplicationJSONObject) {
        this.patchToken201ApplicationJSONObject = patchToken201ApplicationJSONObject;
        return this;
    }
}