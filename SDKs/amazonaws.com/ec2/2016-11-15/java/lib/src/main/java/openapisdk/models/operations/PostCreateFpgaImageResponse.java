package openapisdk.models.operations;



public class PostCreateFpgaImageResponse {
    public byte[] body;
    public PostCreateFpgaImageResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCreateFpgaImageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCreateFpgaImageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}