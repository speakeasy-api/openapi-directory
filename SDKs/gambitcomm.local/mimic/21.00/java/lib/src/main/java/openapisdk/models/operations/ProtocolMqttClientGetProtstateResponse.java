package openapisdk.models.operations;



public class ProtocolMqttClientGetProtstateResponse {
    public String contentType;
    public ProtocolMqttClientGetProtstateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolMqttClientGetProtstateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Integer[] protocolMqttClientGetProtstate200ApplicationJSONInt32Integers;
    public ProtocolMqttClientGetProtstateResponse withProtocolMqttClientGetProtstate200ApplicationJsonInt32Integers(Integer[] protocolMqttClientGetProtstate200ApplicationJSONInt32Integers) {
        this.protocolMqttClientGetProtstate200ApplicationJSONInt32Integers = protocolMqttClientGetProtstate200ApplicationJSONInt32Integers;
        return this;
    }
}