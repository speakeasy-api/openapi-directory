package openapisdk.models.operations;



public class PostSendEmailResponse {
    public byte[] body;
    public PostSendEmailResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostSendEmailResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostSendEmailResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}