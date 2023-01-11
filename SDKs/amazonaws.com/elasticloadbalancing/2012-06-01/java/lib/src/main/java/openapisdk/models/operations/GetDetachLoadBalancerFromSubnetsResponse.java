package openapisdk.models.operations;



public class GetDetachLoadBalancerFromSubnetsResponse {
    public byte[] body;
    public GetDetachLoadBalancerFromSubnetsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDetachLoadBalancerFromSubnetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDetachLoadBalancerFromSubnetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}