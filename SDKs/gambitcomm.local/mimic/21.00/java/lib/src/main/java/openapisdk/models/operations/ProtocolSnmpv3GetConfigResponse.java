package openapisdk.models.operations;



public class ProtocolSnmpv3GetConfigResponse {
    public openapisdk.models.shared.ConfigSnmPv3 configSNMPv3;
    public ProtocolSnmpv3GetConfigResponse withConfigSnmPv3(openapisdk.models.shared.ConfigSnmPv3 configSNMPv3) {
        this.configSNMPv3 = configSNMPv3;
        return this;
    }
    public String contentType;
    public ProtocolSnmpv3GetConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolSnmpv3GetConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}