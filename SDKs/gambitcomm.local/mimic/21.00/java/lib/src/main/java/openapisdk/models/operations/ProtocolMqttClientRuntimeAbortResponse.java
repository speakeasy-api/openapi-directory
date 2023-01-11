package openapisdk.models.operations;



public class ProtocolMqttClientRuntimeAbortResponse {
    public String contentType;
    public ProtocolMqttClientRuntimeAbortResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolMqttClientRuntimeAbortResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] protocolMqttClientRuntimeAbort200ApplicationJSONStrings;
    public ProtocolMqttClientRuntimeAbortResponse withProtocolMqttClientRuntimeAbort200ApplicationJsonStrings(String[] protocolMqttClientRuntimeAbort200ApplicationJSONStrings) {
        this.protocolMqttClientRuntimeAbort200ApplicationJSONStrings = protocolMqttClientRuntimeAbort200ApplicationJSONStrings;
        return this;
    }
}