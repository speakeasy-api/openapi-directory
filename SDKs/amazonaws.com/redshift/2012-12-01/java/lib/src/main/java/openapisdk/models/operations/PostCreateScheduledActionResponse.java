package openapisdk.models.operations;



public class PostCreateScheduledActionResponse {
    public byte[] body;
    public PostCreateScheduledActionResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCreateScheduledActionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCreateScheduledActionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}