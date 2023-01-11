package openapisdk.models.operations;



public class ProtocolMqttClientMessageSetResponse {
    public String contentType;
    public ProtocolMqttClientMessageSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolMqttClientMessageSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] protocolMqttClientMessageSet200ApplicationJSONStrings;
    public ProtocolMqttClientMessageSetResponse withProtocolMqttClientMessageSet200ApplicationJsonStrings(String[] protocolMqttClientMessageSet200ApplicationJSONStrings) {
        this.protocolMqttClientMessageSet200ApplicationJSONStrings = protocolMqttClientMessageSet200ApplicationJSONStrings;
        return this;
    }
}