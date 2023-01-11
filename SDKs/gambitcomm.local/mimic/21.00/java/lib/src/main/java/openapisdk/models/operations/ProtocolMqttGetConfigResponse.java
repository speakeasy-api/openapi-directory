package openapisdk.models.operations;



public class ProtocolMqttGetConfigResponse {
    public openapisdk.models.shared.ConfigMqtt configMQTT;
    public ProtocolMqttGetConfigResponse withConfigMqtt(openapisdk.models.shared.ConfigMqtt configMQTT) {
        this.configMQTT = configMQTT;
        return this;
    }
    public String contentType;
    public ProtocolMqttGetConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolMqttGetConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}