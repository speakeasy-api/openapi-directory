package openapisdk.models.operations;



public class PostDescribeAutoScalingGroupsResponse {
    public byte[] body;
    public PostDescribeAutoScalingGroupsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeAutoScalingGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeAutoScalingGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}