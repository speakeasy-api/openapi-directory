package openapisdk.models.operations;



public class PostAttachLoadBalancersResponse {
    public byte[] body;
    public PostAttachLoadBalancersResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostAttachLoadBalancersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostAttachLoadBalancersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}