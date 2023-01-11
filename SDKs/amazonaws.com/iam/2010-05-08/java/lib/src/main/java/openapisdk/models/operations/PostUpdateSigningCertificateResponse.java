package openapisdk.models.operations;



public class PostUpdateSigningCertificateResponse {
    public byte[] body;
    public PostUpdateSigningCertificateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostUpdateSigningCertificateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostUpdateSigningCertificateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}