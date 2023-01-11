package openapisdk.models.operations;



public class GetDescribeLoadBalancerAttributesResponse {
    public byte[] body;
    public GetDescribeLoadBalancerAttributesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDescribeLoadBalancerAttributesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDescribeLoadBalancerAttributesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}