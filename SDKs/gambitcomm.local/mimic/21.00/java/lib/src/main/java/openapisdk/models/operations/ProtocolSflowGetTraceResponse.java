package openapisdk.models.operations;



public class ProtocolSflowGetTraceResponse {
    public openapisdk.models.shared.ConfigSflow configSFLOW;
    public ProtocolSflowGetTraceResponse withConfigSflow(openapisdk.models.shared.ConfigSflow configSFLOW) {
        this.configSFLOW = configSFLOW;
        return this;
    }
    public String contentType;
    public ProtocolSflowGetTraceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolSflowGetTraceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}