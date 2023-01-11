package openapisdk.models.operations;



public class PostDescribeLoadBalancersResponse {
    public byte[] body;
    public PostDescribeLoadBalancersResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeLoadBalancersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeLoadBalancersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}