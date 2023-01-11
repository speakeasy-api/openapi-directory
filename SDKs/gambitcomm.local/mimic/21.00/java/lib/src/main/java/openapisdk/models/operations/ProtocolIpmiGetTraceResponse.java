package openapisdk.models.operations;



public class ProtocolIpmiGetTraceResponse {
    public openapisdk.models.shared.ConfigIpmi configIPMI;
    public ProtocolIpmiGetTraceResponse withConfigIpmi(openapisdk.models.shared.ConfigIpmi configIPMI) {
        this.configIPMI = configIPMI;
        return this;
    }
    public String contentType;
    public ProtocolIpmiGetTraceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolIpmiGetTraceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}