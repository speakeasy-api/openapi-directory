package openapisdk.models.operations;



public class GetAttachLoadBalancerTargetGroupsResponse {
    public byte[] body;
    public GetAttachLoadBalancerTargetGroupsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetAttachLoadBalancerTargetGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAttachLoadBalancerTargetGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}