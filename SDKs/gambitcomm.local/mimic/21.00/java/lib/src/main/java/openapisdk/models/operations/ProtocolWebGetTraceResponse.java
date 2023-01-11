package openapisdk.models.operations;



public class ProtocolWebGetTraceResponse {
    public openapisdk.models.shared.ConfigWeb configWEB;
    public ProtocolWebGetTraceResponse withConfigWeb(openapisdk.models.shared.ConfigWeb configWEB) {
        this.configWEB = configWEB;
        return this;
    }
    public String contentType;
    public ProtocolWebGetTraceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolWebGetTraceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}