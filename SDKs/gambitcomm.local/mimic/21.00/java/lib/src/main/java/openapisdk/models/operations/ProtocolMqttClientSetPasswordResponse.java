package openapisdk.models.operations;



public class ProtocolMqttClientSetPasswordResponse {
    public String contentType;
    public ProtocolMqttClientSetPasswordResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolMqttClientSetPasswordResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Integer[] protocolMqttClientSetPassword200ApplicationJSONInt32Integers;
    public ProtocolMqttClientSetPasswordResponse withProtocolMqttClientSetPassword200ApplicationJsonInt32Integers(Integer[] protocolMqttClientSetPassword200ApplicationJSONInt32Integers) {
        this.protocolMqttClientSetPassword200ApplicationJSONInt32Integers = protocolMqttClientSetPassword200ApplicationJSONInt32Integers;
        return this;
    }
}