package openapisdk.models.operations;



public class ProtocolMqttClientSetKeepaliveResponse {
    public String contentType;
    public ProtocolMqttClientSetKeepaliveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolMqttClientSetKeepaliveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Integer[] protocolMqttClientSetKeepalive200ApplicationJSONInt32Integers;
    public ProtocolMqttClientSetKeepaliveResponse withProtocolMqttClientSetKeepalive200ApplicationJsonInt32Integers(Integer[] protocolMqttClientSetKeepalive200ApplicationJSONInt32Integers) {
        this.protocolMqttClientSetKeepalive200ApplicationJSONInt32Integers = protocolMqttClientSetKeepalive200ApplicationJSONInt32Integers;
        return this;
    }
}