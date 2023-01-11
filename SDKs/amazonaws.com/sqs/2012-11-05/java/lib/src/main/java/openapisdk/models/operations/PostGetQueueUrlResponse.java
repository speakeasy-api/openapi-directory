package openapisdk.models.operations;



public class PostGetQueueUrlResponse {
    public byte[] body;
    public PostGetQueueUrlResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostGetQueueUrlResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostGetQueueUrlResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}