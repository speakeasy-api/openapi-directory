package openapisdk.models.operations;



public class ProtocolMqttClientUnsubscribeResponse {
    public String contentType;
    public ProtocolMqttClientUnsubscribeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolMqttClientUnsubscribeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String protocolMqttClientUnsubscribe200ApplicationJSONString;
    public ProtocolMqttClientUnsubscribeResponse withProtocolMqttClientUnsubscribe200ApplicationJsonString(String protocolMqttClientUnsubscribe200ApplicationJSONString) {
        this.protocolMqttClientUnsubscribe200ApplicationJSONString = protocolMqttClientUnsubscribe200ApplicationJSONString;
        return this;
    }
}