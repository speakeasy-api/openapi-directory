package openapisdk.models.operations;



public class GetAttachLoadBalancerToSubnetsResponse {
    public byte[] body;
    public GetAttachLoadBalancerToSubnetsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetAttachLoadBalancerToSubnetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAttachLoadBalancerToSubnetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}