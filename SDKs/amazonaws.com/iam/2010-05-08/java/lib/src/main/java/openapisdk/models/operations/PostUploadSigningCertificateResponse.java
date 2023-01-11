package openapisdk.models.operations;



public class PostUploadSigningCertificateResponse {
    public byte[] body;
    public PostUploadSigningCertificateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostUploadSigningCertificateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostUploadSigningCertificateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}