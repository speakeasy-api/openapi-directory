package openapisdk.models.operations;



public class PostCreateAutoScalingGroupResponse {
    public byte[] body;
    public PostCreateAutoScalingGroupResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCreateAutoScalingGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCreateAutoScalingGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}