package openapisdk.models.operations;



public class PostUntagUserResponse {
    public byte[] body;
    public PostUntagUserResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostUntagUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostUntagUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}