package openapisdk.models.operations;



public class ProtocolWebGetConfigResponse {
    public openapisdk.models.shared.ConfigWeb configWEB;
    public ProtocolWebGetConfigResponse withConfigWeb(openapisdk.models.shared.ConfigWeb configWEB) {
        this.configWEB = configWEB;
        return this;
    }
    public String contentType;
    public ProtocolWebGetConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolWebGetConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}