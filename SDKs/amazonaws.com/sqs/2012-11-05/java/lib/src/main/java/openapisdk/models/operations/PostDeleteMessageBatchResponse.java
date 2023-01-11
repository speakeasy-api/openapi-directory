package openapisdk.models.operations;



public class PostDeleteMessageBatchResponse {
    public byte[] body;
    public PostDeleteMessageBatchResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDeleteMessageBatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDeleteMessageBatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}