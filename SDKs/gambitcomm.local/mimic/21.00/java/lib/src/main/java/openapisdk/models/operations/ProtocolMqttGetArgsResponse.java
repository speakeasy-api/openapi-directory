package openapisdk.models.operations;



public class ProtocolMqttGetArgsResponse {
    public String contentType;
    public ProtocolMqttGetArgsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolMqttGetArgsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> protocolMqttGetArgs200ApplicationJSONObject;
    public ProtocolMqttGetArgsResponse withProtocolMqttGetArgs200ApplicationJsonObject(java.util.Map<String, Object> protocolMqttGetArgs200ApplicationJSONObject) {
        this.protocolMqttGetArgs200ApplicationJSONObject = protocolMqttGetArgs200ApplicationJSONObject;
        return this;
    }
}