package openapisdk.models.operations;



public class PostListAccessKeysResponse {
    public byte[] body;
    public PostListAccessKeysResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostListAccessKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostListAccessKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}