package openapisdk.models.operations;



public class PostUpdateServerCertificateResponse {
    public byte[] body;
    public PostUpdateServerCertificateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostUpdateServerCertificateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostUpdateServerCertificateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}