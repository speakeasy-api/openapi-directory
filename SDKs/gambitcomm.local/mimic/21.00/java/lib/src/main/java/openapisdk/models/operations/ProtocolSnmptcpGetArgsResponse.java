package openapisdk.models.operations;



public class ProtocolSnmptcpGetArgsResponse {
    public String contentType;
    public ProtocolSnmptcpGetArgsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolSnmptcpGetArgsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> protocolSnmptcpGetArgs200ApplicationJSONObject;
    public ProtocolSnmptcpGetArgsResponse withProtocolSnmptcpGetArgs200ApplicationJsonObject(java.util.Map<String, Object> protocolSnmptcpGetArgs200ApplicationJSONObject) {
        this.protocolSnmptcpGetArgs200ApplicationJSONObject = protocolSnmptcpGetArgs200ApplicationJSONObject;
        return this;
    }
}