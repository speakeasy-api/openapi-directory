package openapisdk.models.operations;



public class PostApplySecurityGroupsToLoadBalancerResponse {
    public byte[] body;
    public PostApplySecurityGroupsToLoadBalancerResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostApplySecurityGroupsToLoadBalancerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostApplySecurityGroupsToLoadBalancerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}