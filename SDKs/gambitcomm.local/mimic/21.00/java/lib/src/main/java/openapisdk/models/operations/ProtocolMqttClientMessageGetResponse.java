package openapisdk.models.operations;



public class ProtocolMqttClientMessageGetResponse {
    public String contentType;
    public ProtocolMqttClientMessageGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolMqttClientMessageGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] protocolMqttClientMessageGet200ApplicationJSONStrings;
    public ProtocolMqttClientMessageGetResponse withProtocolMqttClientMessageGet200ApplicationJsonStrings(String[] protocolMqttClientMessageGet200ApplicationJSONStrings) {
        this.protocolMqttClientMessageGet200ApplicationJSONStrings = protocolMqttClientMessageGet200ApplicationJSONStrings;
        return this;
    }
}