package openapisdk.models.operations;



public class PostGetUserResponse {
    public byte[] body;
    public PostGetUserResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostGetUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostGetUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}