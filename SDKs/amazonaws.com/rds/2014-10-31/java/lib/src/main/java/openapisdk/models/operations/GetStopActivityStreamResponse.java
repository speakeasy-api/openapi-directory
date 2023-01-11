package openapisdk.models.operations;



public class GetStopActivityStreamResponse {
    public byte[] body;
    public GetStopActivityStreamResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetStopActivityStreamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetStopActivityStreamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}