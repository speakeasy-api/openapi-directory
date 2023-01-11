package openapisdk.models.operations;



public class ProtocolMqttClientSetWillmsgResponse {
    public String contentType;
    public ProtocolMqttClientSetWillmsgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolMqttClientSetWillmsgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Integer[] protocolMqttClientSetWillmsg200ApplicationJSONInt32Integers;
    public ProtocolMqttClientSetWillmsgResponse withProtocolMqttClientSetWillmsg200ApplicationJsonInt32Integers(Integer[] protocolMqttClientSetWillmsg200ApplicationJSONInt32Integers) {
        this.protocolMqttClientSetWillmsg200ApplicationJSONInt32Integers = protocolMqttClientSetWillmsg200ApplicationJSONInt32Integers;
        return this;
    }
}