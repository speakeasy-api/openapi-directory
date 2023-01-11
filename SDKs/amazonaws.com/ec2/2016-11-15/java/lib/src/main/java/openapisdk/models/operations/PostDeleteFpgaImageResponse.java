package openapisdk.models.operations;



public class PostDeleteFpgaImageResponse {
    public byte[] body;
    public PostDeleteFpgaImageResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDeleteFpgaImageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDeleteFpgaImageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}