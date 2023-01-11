package openapisdk.models.operations;



public class ListIpaliasesResponse {
    public String contentType;
    public ListIpaliasesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.IpAlias[] ipAliases;
    public ListIpaliasesResponse withIpAliases(openapisdk.models.shared.IpAlias[] ipAliases) {
        this.ipAliases = ipAliases;
        return this;
    }
    public Long statusCode;
    public ListIpaliasesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}