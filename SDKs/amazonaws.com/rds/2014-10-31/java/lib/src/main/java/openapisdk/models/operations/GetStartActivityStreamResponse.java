package openapisdk.models.operations;



public class GetStartActivityStreamResponse {
    public byte[] body;
    public GetStartActivityStreamResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetStartActivityStreamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetStartActivityStreamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}