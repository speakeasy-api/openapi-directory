package openapisdk.models.operations;



public class GetDeleteHsmClientCertificateResponse {
    public byte[] body;
    public GetDeleteHsmClientCertificateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDeleteHsmClientCertificateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDeleteHsmClientCertificateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}