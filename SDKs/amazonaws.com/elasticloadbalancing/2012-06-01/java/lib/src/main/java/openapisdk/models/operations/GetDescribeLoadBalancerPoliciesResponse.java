package openapisdk.models.operations;



public class GetDescribeLoadBalancerPoliciesResponse {
    public byte[] body;
    public GetDescribeLoadBalancerPoliciesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDescribeLoadBalancerPoliciesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDescribeLoadBalancerPoliciesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}