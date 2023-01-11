package openapisdk.models.operations;



public class PostCreateLoadBalancerResponse {
    public byte[] body;
    public PostCreateLoadBalancerResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCreateLoadBalancerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCreateLoadBalancerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}