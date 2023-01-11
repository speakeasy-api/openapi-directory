package openapisdk.models.operations;



public class ProtocolSnmptcpGetConfigResponse {
    public openapisdk.models.shared.ConfigSnmptcp configSNMPTCP;
    public ProtocolSnmptcpGetConfigResponse withConfigSnmptcp(openapisdk.models.shared.ConfigSnmptcp configSNMPTCP) {
        this.configSNMPTCP = configSNMPTCP;
        return this;
    }
    public String contentType;
    public ProtocolSnmptcpGetConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolSnmptcpGetConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}