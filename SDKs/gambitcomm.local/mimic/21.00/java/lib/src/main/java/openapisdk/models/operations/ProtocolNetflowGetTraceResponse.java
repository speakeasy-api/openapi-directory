package openapisdk.models.operations;



public class ProtocolNetflowGetTraceResponse {
    public openapisdk.models.shared.ConfigNetflow configNETFLOW;
    public ProtocolNetflowGetTraceResponse withConfigNetflow(openapisdk.models.shared.ConfigNetflow configNETFLOW) {
        this.configNETFLOW = configNETFLOW;
        return this;
    }
    public String contentType;
    public ProtocolNetflowGetTraceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolNetflowGetTraceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}