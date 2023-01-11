package openapisdk.models.operations;



public class ProtocolCoapGetArgsResponse {
    public String contentType;
    public ProtocolCoapGetArgsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolCoapGetArgsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> protocolCoapGetArgs200ApplicationJSONObject;
    public ProtocolCoapGetArgsResponse withProtocolCoapGetArgs200ApplicationJsonObject(java.util.Map<String, Object> protocolCoapGetArgs200ApplicationJSONObject) {
        this.protocolCoapGetArgs200ApplicationJSONObject = protocolCoapGetArgs200ApplicationJSONObject;
        return this;
    }
}