package openapisdk.models.operations;



public class ProtocolMqttClientSetBrokerResponse {
    public String contentType;
    public ProtocolMqttClientSetBrokerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolMqttClientSetBrokerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Integer[] protocolMqttClientSetBroker200ApplicationJSONInt32Integers;
    public ProtocolMqttClientSetBrokerResponse withProtocolMqttClientSetBroker200ApplicationJsonInt32Integers(Integer[] protocolMqttClientSetBroker200ApplicationJSONInt32Integers) {
        this.protocolMqttClientSetBroker200ApplicationJSONInt32Integers = protocolMqttClientSetBroker200ApplicationJSONInt32Integers;
        return this;
    }
}