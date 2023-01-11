package openapisdk.models.operations;



public class PostSendTemplatedEmailResponse {
    public byte[] body;
    public PostSendTemplatedEmailResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostSendTemplatedEmailResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostSendTemplatedEmailResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}