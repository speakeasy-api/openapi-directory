package openapisdk.models.operations;



public class ProtocolMqttClientSetWillretainResponse {
    public String contentType;
    public ProtocolMqttClientSetWillretainResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolMqttClientSetWillretainResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Integer[] protocolMqttClientSetWillretain200ApplicationJSONInt32Integers;
    public ProtocolMqttClientSetWillretainResponse withProtocolMqttClientSetWillretain200ApplicationJsonInt32Integers(Integer[] protocolMqttClientSetWillretain200ApplicationJSONInt32Integers) {
        this.protocolMqttClientSetWillretain200ApplicationJSONInt32Integers = protocolMqttClientSetWillretain200ApplicationJSONInt32Integers;
        return this;
    }
}