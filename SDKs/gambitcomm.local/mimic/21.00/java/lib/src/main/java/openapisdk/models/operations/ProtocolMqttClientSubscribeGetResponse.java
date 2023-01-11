package openapisdk.models.operations;



public class ProtocolMqttClientSubscribeGetResponse {
    public String contentType;
    public ProtocolMqttClientSubscribeGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolMqttClientSubscribeGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] protocolMqttClientSubscribeGet200ApplicationJSONStrings;
    public ProtocolMqttClientSubscribeGetResponse withProtocolMqttClientSubscribeGet200ApplicationJsonStrings(String[] protocolMqttClientSubscribeGet200ApplicationJSONStrings) {
        this.protocolMqttClientSubscribeGet200ApplicationJSONStrings = protocolMqttClientSubscribeGet200ApplicationJSONStrings;
        return this;
    }
}