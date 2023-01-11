package openapisdk.models.operations;



public class PostTagUserResponse {
    public byte[] body;
    public PostTagUserResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostTagUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostTagUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}