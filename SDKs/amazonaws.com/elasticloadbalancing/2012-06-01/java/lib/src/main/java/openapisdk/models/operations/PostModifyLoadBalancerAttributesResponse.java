package openapisdk.models.operations;



public class PostModifyLoadBalancerAttributesResponse {
    public byte[] body;
    public PostModifyLoadBalancerAttributesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostModifyLoadBalancerAttributesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostModifyLoadBalancerAttributesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}