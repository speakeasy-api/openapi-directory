package openapisdk.models.operations;



public class ProtocolMqttGetTraceResponse {
    public openapisdk.models.shared.ConfigMqtt configMQTT;
    public ProtocolMqttGetTraceResponse withConfigMqtt(openapisdk.models.shared.ConfigMqtt configMQTT) {
        this.configMQTT = configMQTT;
        return this;
    }
    public String contentType;
    public ProtocolMqttGetTraceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolMqttGetTraceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}