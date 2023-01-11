package openapisdk.models.operations;



public class PatchLocationResponse {
    public String contentType;
    public PatchLocationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PatchLocationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PatchLocation200ApplicationJson patchLocation200ApplicationJSONObject;
    public PatchLocationResponse withPatchLocation200ApplicationJsonObject(PatchLocation200ApplicationJson patchLocation200ApplicationJSONObject) {
        this.patchLocation200ApplicationJSONObject = patchLocation200ApplicationJSONObject;
        return this;
    }
}