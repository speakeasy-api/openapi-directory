package openapisdk.models.operations;



public class ProtocolNetflowGetConfigResponse {
    public openapisdk.models.shared.ConfigNetflow configNETFLOW;
    public ProtocolNetflowGetConfigResponse withConfigNetflow(openapisdk.models.shared.ConfigNetflow configNETFLOW) {
        this.configNETFLOW = configNETFLOW;
        return this;
    }
    public String contentType;
    public ProtocolNetflowGetConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolNetflowGetConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}