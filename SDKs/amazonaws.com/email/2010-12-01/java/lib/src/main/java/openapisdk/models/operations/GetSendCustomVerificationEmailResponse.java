package openapisdk.models.operations;



public class GetSendCustomVerificationEmailResponse {
    public byte[] body;
    public GetSendCustomVerificationEmailResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetSendCustomVerificationEmailResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSendCustomVerificationEmailResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}