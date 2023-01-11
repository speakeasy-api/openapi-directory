package openapisdk.models.operations;



public class GetUploadSigningCertificateResponse {
    public byte[] body;
    public GetUploadSigningCertificateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetUploadSigningCertificateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUploadSigningCertificateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}