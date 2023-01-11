package openapisdk.models.operations;



public class PostSetLoadBalancerPoliciesForBackendServerResponse {
    public byte[] body;
    public PostSetLoadBalancerPoliciesForBackendServerResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostSetLoadBalancerPoliciesForBackendServerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostSetLoadBalancerPoliciesForBackendServerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}