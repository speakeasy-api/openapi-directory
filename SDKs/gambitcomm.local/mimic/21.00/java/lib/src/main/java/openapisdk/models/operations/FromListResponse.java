package openapisdk.models.operations;



public class FromListResponse {
    public String contentType;
    public FromListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.IpSource[] ipSources;
    public FromListResponse withIpSources(openapisdk.models.shared.IpSource[] ipSources) {
        this.ipSources = ipSources;
        return this;
    }
    public Long statusCode;
    public FromListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}