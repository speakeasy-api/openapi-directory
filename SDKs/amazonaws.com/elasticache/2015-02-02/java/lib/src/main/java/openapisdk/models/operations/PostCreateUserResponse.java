package openapisdk.models.operations;



public class PostCreateUserResponse {
    public byte[] body;
    public PostCreateUserResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCreateUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCreateUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}