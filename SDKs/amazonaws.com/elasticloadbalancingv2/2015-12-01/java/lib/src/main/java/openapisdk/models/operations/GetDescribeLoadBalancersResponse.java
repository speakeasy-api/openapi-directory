package openapisdk.models.operations;



public class GetDescribeLoadBalancersResponse {
    public byte[] body;
    public GetDescribeLoadBalancersResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDescribeLoadBalancersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDescribeLoadBalancersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}