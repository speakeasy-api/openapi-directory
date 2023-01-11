package openapisdk.models.operations;



public class GetApplySecurityGroupsToLoadBalancerResponse {
    public byte[] body;
    public GetApplySecurityGroupsToLoadBalancerResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetApplySecurityGroupsToLoadBalancerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetApplySecurityGroupsToLoadBalancerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}