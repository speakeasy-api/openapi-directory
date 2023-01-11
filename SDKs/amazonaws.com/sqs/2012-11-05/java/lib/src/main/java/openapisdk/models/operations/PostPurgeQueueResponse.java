package openapisdk.models.operations;



public class PostPurgeQueueResponse {
    public byte[] body;
    public PostPurgeQueueResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostPurgeQueueResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostPurgeQueueResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}