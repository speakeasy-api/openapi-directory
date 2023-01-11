package openapisdk.models.operations;



public class PostCreateImageResponse {
    public byte[] body;
    public PostCreateImageResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCreateImageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCreateImageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}