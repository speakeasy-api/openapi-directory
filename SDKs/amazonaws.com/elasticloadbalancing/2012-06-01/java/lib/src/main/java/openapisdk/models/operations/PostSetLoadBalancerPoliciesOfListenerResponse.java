package openapisdk.models.operations;



public class PostSetLoadBalancerPoliciesOfListenerResponse {
    public byte[] body;
    public PostSetLoadBalancerPoliciesOfListenerResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostSetLoadBalancerPoliciesOfListenerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostSetLoadBalancerPoliciesOfListenerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}