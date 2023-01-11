package openapisdk.models.operations;



public class PostDeregisterTargetsResponse {
    public byte[] body;
    public PostDeregisterTargetsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDeregisterTargetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDeregisterTargetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}