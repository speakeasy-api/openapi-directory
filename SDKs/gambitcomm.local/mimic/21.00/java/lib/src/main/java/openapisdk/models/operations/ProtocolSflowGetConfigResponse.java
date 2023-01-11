package openapisdk.models.operations;



public class ProtocolSflowGetConfigResponse {
    public openapisdk.models.shared.ConfigSflow configSFLOW;
    public ProtocolSflowGetConfigResponse withConfigSflow(openapisdk.models.shared.ConfigSflow configSFLOW) {
        this.configSFLOW = configSFLOW;
        return this;
    }
    public String contentType;
    public ProtocolSflowGetConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolSflowGetConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}