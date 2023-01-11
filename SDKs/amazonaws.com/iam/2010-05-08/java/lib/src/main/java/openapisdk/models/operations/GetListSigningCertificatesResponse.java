package openapisdk.models.operations;



public class GetListSigningCertificatesResponse {
    public byte[] body;
    public GetListSigningCertificatesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetListSigningCertificatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetListSigningCertificatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}