package openapisdk.models.operations;



public class GetDetachLoadBalancerTargetGroupsResponse {
    public byte[] body;
    public GetDetachLoadBalancerTargetGroupsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDetachLoadBalancerTargetGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDetachLoadBalancerTargetGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}