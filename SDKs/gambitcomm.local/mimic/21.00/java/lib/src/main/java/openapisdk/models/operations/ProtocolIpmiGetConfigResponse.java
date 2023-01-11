package openapisdk.models.operations;



public class ProtocolIpmiGetConfigResponse {
    public openapisdk.models.shared.ConfigIpmi configIPMI;
    public ProtocolIpmiGetConfigResponse withConfigIpmi(openapisdk.models.shared.ConfigIpmi configIPMI) {
        this.configIPMI = configIPMI;
        return this;
    }
    public String contentType;
    public ProtocolIpmiGetConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolIpmiGetConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}