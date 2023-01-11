package openapisdk.models.operations;



public class ProtocolIpmiGetArgsResponse {
    public String contentType;
    public ProtocolIpmiGetArgsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolIpmiGetArgsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> protocolIpmiGetArgs200ApplicationJSONObject;
    public ProtocolIpmiGetArgsResponse withProtocolIpmiGetArgs200ApplicationJsonObject(java.util.Map<String, Object> protocolIpmiGetArgs200ApplicationJSONObject) {
        this.protocolIpmiGetArgs200ApplicationJSONObject = protocolIpmiGetArgs200ApplicationJSONObject;
        return this;
    }
}