package openapisdk.models.operations;



public class PostGenerateCredentialReportResponse {
    public byte[] body;
    public PostGenerateCredentialReportResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostGenerateCredentialReportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostGenerateCredentialReportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}