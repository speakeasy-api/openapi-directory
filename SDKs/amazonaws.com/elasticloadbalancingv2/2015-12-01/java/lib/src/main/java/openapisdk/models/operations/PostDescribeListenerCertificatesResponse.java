package openapisdk.models.operations;



public class PostDescribeListenerCertificatesResponse {
    public byte[] body;
    public PostDescribeListenerCertificatesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeListenerCertificatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeListenerCertificatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}