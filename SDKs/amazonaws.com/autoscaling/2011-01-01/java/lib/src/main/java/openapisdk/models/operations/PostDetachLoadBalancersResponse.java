package openapisdk.models.operations;



public class PostDetachLoadBalancersResponse {
    public byte[] body;
    public PostDetachLoadBalancersResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDetachLoadBalancersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDetachLoadBalancersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}