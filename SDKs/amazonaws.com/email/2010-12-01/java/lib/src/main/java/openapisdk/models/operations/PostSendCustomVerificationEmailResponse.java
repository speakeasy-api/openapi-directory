package openapisdk.models.operations;



public class PostSendCustomVerificationEmailResponse {
    public byte[] body;
    public PostSendCustomVerificationEmailResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostSendCustomVerificationEmailResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostSendCustomVerificationEmailResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}