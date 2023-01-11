package openapisdk.models.operations;



public class PostDeleteLoadBalancerListenersResponse {
    public byte[] body;
    public PostDeleteLoadBalancerListenersResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDeleteLoadBalancerListenersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDeleteLoadBalancerListenersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}