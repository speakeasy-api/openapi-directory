package openapisdk.models.operations;



public class PostDeleteScheduledActionResponse {
    public byte[] body;
    public PostDeleteScheduledActionResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDeleteScheduledActionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDeleteScheduledActionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}