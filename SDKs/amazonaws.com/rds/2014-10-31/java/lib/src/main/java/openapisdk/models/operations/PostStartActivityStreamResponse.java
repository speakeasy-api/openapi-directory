package openapisdk.models.operations;



public class PostStartActivityStreamResponse {
    public byte[] body;
    public PostStartActivityStreamResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostStartActivityStreamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostStartActivityStreamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}