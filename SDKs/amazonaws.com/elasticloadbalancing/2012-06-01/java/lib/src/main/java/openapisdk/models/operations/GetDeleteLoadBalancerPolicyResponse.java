package openapisdk.models.operations;



public class GetDeleteLoadBalancerPolicyResponse {
    public byte[] body;
    public GetDeleteLoadBalancerPolicyResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDeleteLoadBalancerPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDeleteLoadBalancerPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}