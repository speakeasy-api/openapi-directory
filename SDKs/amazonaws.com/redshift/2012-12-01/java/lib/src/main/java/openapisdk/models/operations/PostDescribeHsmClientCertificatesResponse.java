package openapisdk.models.operations;



public class PostDescribeHsmClientCertificatesResponse {
    public byte[] body;
    public PostDescribeHsmClientCertificatesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeHsmClientCertificatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeHsmClientCertificatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}