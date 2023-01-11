package openapisdk.models.operations;



public class PostSendBulkTemplatedEmailResponse {
    public byte[] body;
    public PostSendBulkTemplatedEmailResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostSendBulkTemplatedEmailResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostSendBulkTemplatedEmailResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}