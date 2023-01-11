package openapisdk.models.operations;



public class GetSetLoadBalancerPoliciesForBackendServerResponse {
    public byte[] body;
    public GetSetLoadBalancerPoliciesForBackendServerResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetSetLoadBalancerPoliciesForBackendServerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSetLoadBalancerPoliciesForBackendServerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}