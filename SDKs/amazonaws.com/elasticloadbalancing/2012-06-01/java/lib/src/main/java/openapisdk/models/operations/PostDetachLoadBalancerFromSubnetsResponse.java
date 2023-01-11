package openapisdk.models.operations;



public class PostDetachLoadBalancerFromSubnetsResponse {
    public byte[] body;
    public PostDetachLoadBalancerFromSubnetsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDetachLoadBalancerFromSubnetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDetachLoadBalancerFromSubnetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}