package openapisdk.models.operations;



public class PostDescribeLoadBalancerAttributesResponse {
    public byte[] body;
    public PostDescribeLoadBalancerAttributesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeLoadBalancerAttributesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeLoadBalancerAttributesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}