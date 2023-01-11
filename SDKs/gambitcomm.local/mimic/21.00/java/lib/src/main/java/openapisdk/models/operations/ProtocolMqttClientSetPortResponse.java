package openapisdk.models.operations;



public class ProtocolMqttClientSetPortResponse {
    public String contentType;
    public ProtocolMqttClientSetPortResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolMqttClientSetPortResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Integer[] protocolMqttClientSetPort200ApplicationJSONInt32Integers;
    public ProtocolMqttClientSetPortResponse withProtocolMqttClientSetPort200ApplicationJsonInt32Integers(Integer[] protocolMqttClientSetPort200ApplicationJSONInt32Integers) {
        this.protocolMqttClientSetPort200ApplicationJSONInt32Integers = protocolMqttClientSetPort200ApplicationJSONInt32Integers;
        return this;
    }
}