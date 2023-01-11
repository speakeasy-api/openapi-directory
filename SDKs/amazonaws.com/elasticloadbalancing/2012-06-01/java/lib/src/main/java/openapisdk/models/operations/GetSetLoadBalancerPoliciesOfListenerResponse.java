package openapisdk.models.operations;



public class GetSetLoadBalancerPoliciesOfListenerResponse {
    public byte[] body;
    public GetSetLoadBalancerPoliciesOfListenerResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetSetLoadBalancerPoliciesOfListenerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSetLoadBalancerPoliciesOfListenerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}