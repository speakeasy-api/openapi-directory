package openapisdk.models.operations;



public class PostCreateHsmClientCertificateResponse {
    public byte[] body;
    public PostCreateHsmClientCertificateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCreateHsmClientCertificateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCreateHsmClientCertificateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}