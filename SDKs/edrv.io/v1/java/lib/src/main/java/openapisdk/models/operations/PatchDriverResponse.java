package openapisdk.models.operations;



public class PatchDriverResponse {
    public String contentType;
    public PatchDriverResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PatchDriverResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PatchDriver200ApplicationJson patchDriver200ApplicationJSONObject;
    public PatchDriverResponse withPatchDriver200ApplicationJsonObject(PatchDriver200ApplicationJson patchDriver200ApplicationJSONObject) {
        this.patchDriver200ApplicationJSONObject = patchDriver200ApplicationJSONObject;
        return this;
    }
}