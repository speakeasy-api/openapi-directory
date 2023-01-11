package openapisdk.models.operations;



public class ProtocolGetConfigResponse {
    public String contentType;
    public ProtocolGetConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolGetConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> protocolGetConfig200ApplicationJSONObject;
    public ProtocolGetConfigResponse withProtocolGetConfig200ApplicationJsonObject(java.util.Map<String, Object> protocolGetConfig200ApplicationJSONObject) {
        this.protocolGetConfig200ApplicationJSONObject = protocolGetConfig200ApplicationJSONObject;
        return this;
    }
}