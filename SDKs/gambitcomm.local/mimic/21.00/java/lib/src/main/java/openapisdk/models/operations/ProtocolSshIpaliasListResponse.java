package openapisdk.models.operations;



public class ProtocolSshIpaliasListResponse {
    public String contentType;
    public ProtocolSshIpaliasListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.IpAlias[] ipAliases;
    public ProtocolSshIpaliasListResponse withIpAliases(openapisdk.models.shared.IpAlias[] ipAliases) {
        this.ipAliases = ipAliases;
        return this;
    }
    public Long statusCode;
    public ProtocolSshIpaliasListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}