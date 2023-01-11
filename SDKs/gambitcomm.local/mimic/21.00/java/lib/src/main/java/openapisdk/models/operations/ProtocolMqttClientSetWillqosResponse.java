package openapisdk.models.operations;



public class ProtocolMqttClientSetWillqosResponse {
    public String contentType;
    public ProtocolMqttClientSetWillqosResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolMqttClientSetWillqosResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Integer[] protocolMqttClientSetWillqos200ApplicationJSONInt32Integers;
    public ProtocolMqttClientSetWillqosResponse withProtocolMqttClientSetWillqos200ApplicationJsonInt32Integers(Integer[] protocolMqttClientSetWillqos200ApplicationJSONInt32Integers) {
        this.protocolMqttClientSetWillqos200ApplicationJSONInt32Integers = protocolMqttClientSetWillqos200ApplicationJSONInt32Integers;
        return this;
    }
}