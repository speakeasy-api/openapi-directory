package openapisdk.models.operations;



public class ProtocolWebGetArgsResponse {
    public String contentType;
    public ProtocolWebGetArgsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolWebGetArgsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> protocolWebGetArgs200ApplicationJSONObject;
    public ProtocolWebGetArgsResponse withProtocolWebGetArgs200ApplicationJsonObject(java.util.Map<String, Object> protocolWebGetArgs200ApplicationJSONObject) {
        this.protocolWebGetArgs200ApplicationJSONObject = protocolWebGetArgs200ApplicationJSONObject;
        return this;
    }
}