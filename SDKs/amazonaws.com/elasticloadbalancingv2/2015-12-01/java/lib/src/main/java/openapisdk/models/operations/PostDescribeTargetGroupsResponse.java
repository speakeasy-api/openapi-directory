package openapisdk.models.operations;



public class PostDescribeTargetGroupsResponse {
    public byte[] body;
    public PostDescribeTargetGroupsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeTargetGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeTargetGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}