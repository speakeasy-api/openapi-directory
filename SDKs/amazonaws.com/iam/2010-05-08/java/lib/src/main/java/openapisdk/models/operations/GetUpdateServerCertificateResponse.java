package openapisdk.models.operations;



public class GetUpdateServerCertificateResponse {
    public byte[] body;
    public GetUpdateServerCertificateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetUpdateServerCertificateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUpdateServerCertificateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}