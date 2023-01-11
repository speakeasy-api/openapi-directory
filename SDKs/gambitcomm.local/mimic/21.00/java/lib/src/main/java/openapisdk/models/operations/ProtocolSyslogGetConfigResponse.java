package openapisdk.models.operations;



public class ProtocolSyslogGetConfigResponse {
    public openapisdk.models.shared.ConfigSyslog configSYSLOG;
    public ProtocolSyslogGetConfigResponse withConfigSyslog(openapisdk.models.shared.ConfigSyslog configSYSLOG) {
        this.configSYSLOG = configSYSLOG;
        return this;
    }
    public String contentType;
    public ProtocolSyslogGetConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolSyslogGetConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}