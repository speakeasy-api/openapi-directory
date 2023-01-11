package openapisdk.models.operations;



public class ListFailedIpNsResponse {
    public String contentType;
    public ListFailedIpNsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListFailedIpNsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ListFailedIpNs listFailedIPNs;
    public ListFailedIpNsResponse withListFailedIpNs(openapisdk.models.shared.ListFailedIpNs listFailedIPNs) {
        this.listFailedIPNs = listFailedIPNs;
        return this;
    }
}