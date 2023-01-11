package openapisdk.models.operations;



public class ProtocolSnmptcpIpaliasListResponse {
    public String contentType;
    public ProtocolSnmptcpIpaliasListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.IpAlias[] ipAliases;
    public ProtocolSnmptcpIpaliasListResponse withIpAliases(openapisdk.models.shared.IpAlias[] ipAliases) {
        this.ipAliases = ipAliases;
        return this;
    }
    public Long statusCode;
    public ProtocolSnmptcpIpaliasListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}