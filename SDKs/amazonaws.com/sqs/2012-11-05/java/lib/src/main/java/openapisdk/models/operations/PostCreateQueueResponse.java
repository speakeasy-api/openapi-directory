package openapisdk.models.operations;



public class PostCreateQueueResponse {
    public byte[] body;
    public PostCreateQueueResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCreateQueueResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCreateQueueResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}