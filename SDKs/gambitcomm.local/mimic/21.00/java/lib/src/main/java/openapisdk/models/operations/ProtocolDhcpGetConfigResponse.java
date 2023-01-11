package openapisdk.models.operations;



public class ProtocolDhcpGetConfigResponse {
    public openapisdk.models.shared.ConfigDhcp configDHCP;
    public ProtocolDhcpGetConfigResponse withConfigDhcp(openapisdk.models.shared.ConfigDhcp configDHCP) {
        this.configDHCP = configDHCP;
        return this;
    }
    public String contentType;
    public ProtocolDhcpGetConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolDhcpGetConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}