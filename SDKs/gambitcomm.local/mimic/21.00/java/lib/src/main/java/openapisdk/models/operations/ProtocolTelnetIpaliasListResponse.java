package openapisdk.models.operations;



public class ProtocolTelnetIpaliasListResponse {
    public String contentType;
    public ProtocolTelnetIpaliasListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.IpAlias[] ipAliases;
    public ProtocolTelnetIpaliasListResponse withIpAliases(openapisdk.models.shared.IpAlias[] ipAliases) {
        this.ipAliases = ipAliases;
        return this;
    }
    public Long statusCode;
    public ProtocolTelnetIpaliasListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}