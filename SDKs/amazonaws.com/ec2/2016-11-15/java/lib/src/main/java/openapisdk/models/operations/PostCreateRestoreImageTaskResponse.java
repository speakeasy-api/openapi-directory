package openapisdk.models.operations;



public class PostCreateRestoreImageTaskResponse {
    public byte[] body;
    public PostCreateRestoreImageTaskResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCreateRestoreImageTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCreateRestoreImageTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}