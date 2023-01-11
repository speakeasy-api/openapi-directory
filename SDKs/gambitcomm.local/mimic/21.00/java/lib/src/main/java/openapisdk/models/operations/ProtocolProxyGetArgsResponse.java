package openapisdk.models.operations;



public class ProtocolProxyGetArgsResponse {
    public String contentType;
    public ProtocolProxyGetArgsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolProxyGetArgsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> protocolProxyGetArgs200ApplicationJSONObject;
    public ProtocolProxyGetArgsResponse withProtocolProxyGetArgs200ApplicationJsonObject(java.util.Map<String, Object> protocolProxyGetArgs200ApplicationJSONObject) {
        this.protocolProxyGetArgs200ApplicationJSONObject = protocolProxyGetArgs200ApplicationJSONObject;
        return this;
    }
}