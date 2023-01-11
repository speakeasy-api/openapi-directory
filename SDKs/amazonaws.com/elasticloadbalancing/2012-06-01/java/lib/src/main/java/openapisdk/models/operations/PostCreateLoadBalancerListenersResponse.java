package openapisdk.models.operations;



public class PostCreateLoadBalancerListenersResponse {
    public byte[] body;
    public PostCreateLoadBalancerListenersResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCreateLoadBalancerListenersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCreateLoadBalancerListenersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}