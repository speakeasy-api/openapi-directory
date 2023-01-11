package openapisdk.models.operations;



public class PostCreateLoadBalancerPolicyResponse {
    public byte[] body;
    public PostCreateLoadBalancerPolicyResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCreateLoadBalancerPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCreateLoadBalancerPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}