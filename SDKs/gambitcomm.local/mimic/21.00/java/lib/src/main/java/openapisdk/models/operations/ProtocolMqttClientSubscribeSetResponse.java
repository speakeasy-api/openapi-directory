package openapisdk.models.operations;



public class ProtocolMqttClientSubscribeSetResponse {
    public String contentType;
    public ProtocolMqttClientSubscribeSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolMqttClientSubscribeSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] protocolMqttClientSubscribeSet200ApplicationJSONStrings;
    public ProtocolMqttClientSubscribeSetResponse withProtocolMqttClientSubscribeSet200ApplicationJsonStrings(String[] protocolMqttClientSubscribeSet200ApplicationJSONStrings) {
        this.protocolMqttClientSubscribeSet200ApplicationJSONStrings = protocolMqttClientSubscribeSet200ApplicationJSONStrings;
        return this;
    }
}