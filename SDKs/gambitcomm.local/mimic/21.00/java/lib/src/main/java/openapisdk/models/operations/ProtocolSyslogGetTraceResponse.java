package openapisdk.models.operations;



public class ProtocolSyslogGetTraceResponse {
    public openapisdk.models.shared.ConfigSyslog configSYSLOG;
    public ProtocolSyslogGetTraceResponse withConfigSyslog(openapisdk.models.shared.ConfigSyslog configSYSLOG) {
        this.configSYSLOG = configSYSLOG;
        return this;
    }
    public String contentType;
    public ProtocolSyslogGetTraceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolSyslogGetTraceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}