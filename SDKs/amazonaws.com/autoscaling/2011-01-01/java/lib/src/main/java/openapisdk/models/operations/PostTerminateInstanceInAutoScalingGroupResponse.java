package openapisdk.models.operations;



public class PostTerminateInstanceInAutoScalingGroupResponse {
    public byte[] body;
    public PostTerminateInstanceInAutoScalingGroupResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostTerminateInstanceInAutoScalingGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostTerminateInstanceInAutoScalingGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}