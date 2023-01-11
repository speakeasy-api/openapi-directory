package openapisdk.models.operations;



public class PostUpdateAutoScalingGroupResponse {
    public byte[] body;
    public PostUpdateAutoScalingGroupResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostUpdateAutoScalingGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostUpdateAutoScalingGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}