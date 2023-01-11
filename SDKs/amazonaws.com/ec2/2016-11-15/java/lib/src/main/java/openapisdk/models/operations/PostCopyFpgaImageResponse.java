package openapisdk.models.operations;



public class PostCopyFpgaImageResponse {
    public byte[] body;
    public PostCopyFpgaImageResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCopyFpgaImageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCopyFpgaImageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}