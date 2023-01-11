package openapisdk.models.operations;



public class PostCreateStoreImageTaskResponse {
    public byte[] body;
    public PostCreateStoreImageTaskResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCreateStoreImageTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCreateStoreImageTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}