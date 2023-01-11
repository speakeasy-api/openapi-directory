package openapisdk.models.operations;



public class ProtocolDhcpGetTraceResponse {
    public openapisdk.models.shared.ConfigDhcp configDHCP;
    public ProtocolDhcpGetTraceResponse withConfigDhcp(openapisdk.models.shared.ConfigDhcp configDHCP) {
        this.configDHCP = configDHCP;
        return this;
    }
    public String contentType;
    public ProtocolDhcpGetTraceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolDhcpGetTraceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}