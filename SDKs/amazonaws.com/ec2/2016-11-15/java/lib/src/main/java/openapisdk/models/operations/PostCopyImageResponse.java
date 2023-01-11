package openapisdk.models.operations;



public class PostCopyImageResponse {
    public byte[] body;
    public PostCopyImageResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCopyImageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCopyImageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}