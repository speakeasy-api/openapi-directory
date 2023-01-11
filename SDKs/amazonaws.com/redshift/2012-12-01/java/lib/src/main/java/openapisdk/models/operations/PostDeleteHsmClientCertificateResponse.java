package openapisdk.models.operations;



public class PostDeleteHsmClientCertificateResponse {
    public byte[] body;
    public PostDeleteHsmClientCertificateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDeleteHsmClientCertificateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDeleteHsmClientCertificateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}