package openapisdk.models.operations;



public class PostGetCustomVerificationEmailTemplateResponse {
    public byte[] body;
    public PostGetCustomVerificationEmailTemplateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostGetCustomVerificationEmailTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostGetCustomVerificationEmailTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}