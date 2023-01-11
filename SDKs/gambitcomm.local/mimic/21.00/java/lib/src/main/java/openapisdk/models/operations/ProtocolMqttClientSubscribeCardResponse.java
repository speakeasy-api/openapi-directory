package openapisdk.models.operations;



public class ProtocolMqttClientSubscribeCardResponse {
    public String contentType;
    public ProtocolMqttClientSubscribeCardResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolMqttClientSubscribeCardResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Integer[] protocolMqttClientSubscribeCard200ApplicationJSONInt32Integers;
    public ProtocolMqttClientSubscribeCardResponse withProtocolMqttClientSubscribeCard200ApplicationJsonInt32Integers(Integer[] protocolMqttClientSubscribeCard200ApplicationJSONInt32Integers) {
        this.protocolMqttClientSubscribeCard200ApplicationJSONInt32Integers = protocolMqttClientSubscribeCard200ApplicationJSONInt32Integers;
        return this;
    }
}