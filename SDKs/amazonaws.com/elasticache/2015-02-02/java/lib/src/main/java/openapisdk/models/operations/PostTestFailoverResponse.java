package openapisdk.models.operations;



public class PostTestFailoverResponse {
    public byte[] body;
    public PostTestFailoverResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostTestFailoverResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostTestFailoverResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}