package openapisdk.models.operations;



public class ProtocolMqttClientRuntimeConnectResponse {
    public String contentType;
    public ProtocolMqttClientRuntimeConnectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolMqttClientRuntimeConnectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] protocolMqttClientRuntimeConnect200ApplicationJSONStrings;
    public ProtocolMqttClientRuntimeConnectResponse withProtocolMqttClientRuntimeConnect200ApplicationJsonStrings(String[] protocolMqttClientRuntimeConnect200ApplicationJSONStrings) {
        this.protocolMqttClientRuntimeConnect200ApplicationJSONStrings = protocolMqttClientRuntimeConnect200ApplicationJSONStrings;
        return this;
    }
}