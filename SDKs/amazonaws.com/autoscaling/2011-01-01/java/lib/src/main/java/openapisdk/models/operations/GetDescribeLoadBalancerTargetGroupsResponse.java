package openapisdk.models.operations;



public class GetDescribeLoadBalancerTargetGroupsResponse {
    public byte[] body;
    public GetDescribeLoadBalancerTargetGroupsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDescribeLoadBalancerTargetGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDescribeLoadBalancerTargetGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}