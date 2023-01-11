package openapisdk.models.operations;



public class PostAttachLoadBalancerTargetGroupsResponse {
    public byte[] body;
    public PostAttachLoadBalancerTargetGroupsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostAttachLoadBalancerTargetGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostAttachLoadBalancerTargetGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}