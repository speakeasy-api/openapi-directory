package openapisdk.models.operations;



public class PostDescribeLoadBalancerPoliciesResponse {
    public byte[] body;
    public PostDescribeLoadBalancerPoliciesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeLoadBalancerPoliciesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeLoadBalancerPoliciesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}