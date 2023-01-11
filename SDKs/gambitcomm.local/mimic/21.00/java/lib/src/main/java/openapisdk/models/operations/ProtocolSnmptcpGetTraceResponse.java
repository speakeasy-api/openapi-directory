package openapisdk.models.operations;



public class ProtocolSnmptcpGetTraceResponse {
    public openapisdk.models.shared.ConfigSnmptcp configSNMPTCP;
    public ProtocolSnmptcpGetTraceResponse withConfigSnmptcp(openapisdk.models.shared.ConfigSnmptcp configSNMPTCP) {
        this.configSNMPTCP = configSNMPTCP;
        return this;
    }
    public String contentType;
    public ProtocolSnmptcpGetTraceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolSnmptcpGetTraceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}