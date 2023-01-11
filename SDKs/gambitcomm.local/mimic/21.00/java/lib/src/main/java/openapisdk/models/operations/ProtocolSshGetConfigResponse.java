package openapisdk.models.operations;



public class ProtocolSshGetConfigResponse {
    public openapisdk.models.shared.ConfigSsh configSSH;
    public ProtocolSshGetConfigResponse withConfigSsh(openapisdk.models.shared.ConfigSsh configSSH) {
        this.configSSH = configSSH;
        return this;
    }
    public String contentType;
    public ProtocolSshGetConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolSshGetConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}