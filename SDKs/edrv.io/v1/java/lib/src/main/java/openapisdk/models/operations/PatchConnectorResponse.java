package openapisdk.models.operations;



public class PatchConnectorResponse {
    public String contentType;
    public PatchConnectorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PatchConnectorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PatchConnector201ApplicationJson patchConnector201ApplicationJSONObject;
    public PatchConnectorResponse withPatchConnector201ApplicationJsonObject(PatchConnector201ApplicationJson patchConnector201ApplicationJSONObject) {
        this.patchConnector201ApplicationJSONObject = patchConnector201ApplicationJSONObject;
        return this;
    }
}