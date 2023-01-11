package openapisdk.models.operations;



public class ProtocolMqttClientMessageCardResponse {
    public String contentType;
    public ProtocolMqttClientMessageCardResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolMqttClientMessageCardResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Integer[] protocolMqttClientMessageCard200ApplicationJSONInt32Integers;
    public ProtocolMqttClientMessageCardResponse withProtocolMqttClientMessageCard200ApplicationJsonInt32Integers(Integer[] protocolMqttClientMessageCard200ApplicationJSONInt32Integers) {
        this.protocolMqttClientMessageCard200ApplicationJSONInt32Integers = protocolMqttClientMessageCard200ApplicationJSONInt32Integers;
        return this;
    }
}