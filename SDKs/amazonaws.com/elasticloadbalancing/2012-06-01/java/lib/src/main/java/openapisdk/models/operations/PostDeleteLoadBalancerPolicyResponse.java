package openapisdk.models.operations;



public class PostDeleteLoadBalancerPolicyResponse {
    public byte[] body;
    public PostDeleteLoadBalancerPolicyResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDeleteLoadBalancerPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDeleteLoadBalancerPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}