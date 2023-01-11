package openapisdk.models.operations;



public class PostDetachLoadBalancerTargetGroupsResponse {
    public byte[] body;
    public PostDetachLoadBalancerTargetGroupsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDetachLoadBalancerTargetGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDetachLoadBalancerTargetGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}