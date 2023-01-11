package openapisdk.models.operations;



public class ProtocolMqttClientSetUsernameResponse {
    public String contentType;
    public ProtocolMqttClientSetUsernameResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolMqttClientSetUsernameResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Integer[] protocolMqttClientSetUsername200ApplicationJSONInt32Integers;
    public ProtocolMqttClientSetUsernameResponse withProtocolMqttClientSetUsername200ApplicationJsonInt32Integers(Integer[] protocolMqttClientSetUsername200ApplicationJSONInt32Integers) {
        this.protocolMqttClientSetUsername200ApplicationJSONInt32Integers = protocolMqttClientSetUsername200ApplicationJSONInt32Integers;
        return this;
    }
}