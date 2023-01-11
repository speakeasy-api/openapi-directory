package openapisdk.models.operations;



public class ProtocolMqttClientGetStateResponse {
    public String contentType;
    public ProtocolMqttClientGetStateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolMqttClientGetStateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Integer[] protocolMqttClientGetState200ApplicationJSONInt32Integers;
    public ProtocolMqttClientGetStateResponse withProtocolMqttClientGetState200ApplicationJsonInt32Integers(Integer[] protocolMqttClientGetState200ApplicationJSONInt32Integers) {
        this.protocolMqttClientGetState200ApplicationJSONInt32Integers = protocolMqttClientGetState200ApplicationJSONInt32Integers;
        return this;
    }
}