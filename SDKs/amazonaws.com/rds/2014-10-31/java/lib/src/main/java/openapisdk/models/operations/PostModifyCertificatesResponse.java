package openapisdk.models.operations;



public class PostModifyCertificatesResponse {
    public byte[] body;
    public PostModifyCertificatesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostModifyCertificatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostModifyCertificatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}