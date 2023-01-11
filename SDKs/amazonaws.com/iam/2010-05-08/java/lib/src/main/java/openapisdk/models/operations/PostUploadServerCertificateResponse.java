package openapisdk.models.operations;



public class PostUploadServerCertificateResponse {
    public byte[] body;
    public PostUploadServerCertificateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostUploadServerCertificateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostUploadServerCertificateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}