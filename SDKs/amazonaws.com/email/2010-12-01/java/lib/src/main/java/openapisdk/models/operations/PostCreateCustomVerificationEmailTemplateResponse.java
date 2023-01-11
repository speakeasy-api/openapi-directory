package openapisdk.models.operations;



public class PostCreateCustomVerificationEmailTemplateResponse {
    public byte[] body;
    public PostCreateCustomVerificationEmailTemplateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCreateCustomVerificationEmailTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCreateCustomVerificationEmailTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}