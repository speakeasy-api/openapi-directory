package openapisdk.models.operations;



public class PatchChargeStationVariableResponse {
    public String contentType;
    public PatchChargeStationVariableResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PatchChargeStationVariableResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PatchChargeStationVariable201ApplicationJson patchChargeStationVariable201ApplicationJSONObject;
    public PatchChargeStationVariableResponse withPatchChargeStationVariable201ApplicationJsonObject(PatchChargeStationVariable201ApplicationJson patchChargeStationVariable201ApplicationJSONObject) {
        this.patchChargeStationVariable201ApplicationJSONObject = patchChargeStationVariable201ApplicationJSONObject;
        return this;
    }
}