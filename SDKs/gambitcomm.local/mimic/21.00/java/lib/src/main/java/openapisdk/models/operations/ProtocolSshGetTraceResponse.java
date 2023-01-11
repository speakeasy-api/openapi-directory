package openapisdk.models.operations;



public class ProtocolSshGetTraceResponse {
    public openapisdk.models.shared.ConfigSsh configSSH;
    public ProtocolSshGetTraceResponse withConfigSsh(openapisdk.models.shared.ConfigSsh configSSH) {
        this.configSSH = configSSH;
        return this;
    }
    public String contentType;
    public ProtocolSshGetTraceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolSshGetTraceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}