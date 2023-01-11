package openapisdk.models.operations;



public class PostSetInstanceHealthResponse {
    public byte[] body;
    public PostSetInstanceHealthResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostSetInstanceHealthResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostSetInstanceHealthResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}