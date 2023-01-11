package openapisdk.models.operations;



public class PostCancelJobResponse {
    public byte[] body;
    public PostCancelJobResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCancelJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCancelJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}