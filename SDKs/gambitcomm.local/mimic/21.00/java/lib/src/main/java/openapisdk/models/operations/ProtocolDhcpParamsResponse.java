package openapisdk.models.operations;



public class ProtocolDhcpParamsResponse {
    public String contentType;
    public ProtocolDhcpParamsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolDhcpParamsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object>[] protocolDhcpParams200ApplicationJSONObjects;
    public ProtocolDhcpParamsResponse withProtocolDhcpParams200ApplicationJsonObjects(java.util.Map<String, Object>[] protocolDhcpParams200ApplicationJSONObjects) {
        this.protocolDhcpParams200ApplicationJSONObjects = protocolDhcpParams200ApplicationJSONObjects;
        return this;
    }
}