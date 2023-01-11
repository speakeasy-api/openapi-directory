package openapisdk.models.operations;



public class PostCreateTargetGroupResponse {
    public byte[] body;
    public PostCreateTargetGroupResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCreateTargetGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCreateTargetGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}