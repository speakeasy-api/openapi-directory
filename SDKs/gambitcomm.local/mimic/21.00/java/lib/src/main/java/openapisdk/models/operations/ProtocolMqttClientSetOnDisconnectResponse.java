package openapisdk.models.operations;



public class ProtocolMqttClientSetOnDisconnectResponse {
    public String contentType;
    public ProtocolMqttClientSetOnDisconnectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolMqttClientSetOnDisconnectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Integer[] protocolMqttClientSetOnDisconnect200ApplicationJSONInt32Integers;
    public ProtocolMqttClientSetOnDisconnectResponse withProtocolMqttClientSetOnDisconnect200ApplicationJsonInt32Integers(Integer[] protocolMqttClientSetOnDisconnect200ApplicationJSONInt32Integers) {
        this.protocolMqttClientSetOnDisconnect200ApplicationJSONInt32Integers = protocolMqttClientSetOnDisconnect200ApplicationJSONInt32Integers;
        return this;
    }
}