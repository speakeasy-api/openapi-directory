package openapisdk.models.operations;



public class PostStopActivityStreamResponse {
    public byte[] body;
    public PostStopActivityStreamResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostStopActivityStreamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostStopActivityStreamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}