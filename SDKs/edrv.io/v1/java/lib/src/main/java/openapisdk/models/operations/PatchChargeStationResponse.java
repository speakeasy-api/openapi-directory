package openapisdk.models.operations;



public class PatchChargeStationResponse {
    public String contentType;
    public PatchChargeStationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PatchChargeStationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PatchChargeStation200ApplicationJson patchChargeStation200ApplicationJSONObject;
    public PatchChargeStationResponse withPatchChargeStation200ApplicationJsonObject(PatchChargeStation200ApplicationJson patchChargeStation200ApplicationJSONObject) {
        this.patchChargeStation200ApplicationJSONObject = patchChargeStation200ApplicationJSONObject;
        return this;
    }
}