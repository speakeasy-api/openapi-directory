package openapisdk.models.operations;



public class ProtocolMqttClientRuntimeDisconnectResponse {
    public String contentType;
    public ProtocolMqttClientRuntimeDisconnectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolMqttClientRuntimeDisconnectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] protocolMqttClientRuntimeDisconnect200ApplicationJSONStrings;
    public ProtocolMqttClientRuntimeDisconnectResponse withProtocolMqttClientRuntimeDisconnect200ApplicationJsonStrings(String[] protocolMqttClientRuntimeDisconnect200ApplicationJSONStrings) {
        this.protocolMqttClientRuntimeDisconnect200ApplicationJSONStrings = protocolMqttClientRuntimeDisconnect200ApplicationJSONStrings;
        return this;
    }
}