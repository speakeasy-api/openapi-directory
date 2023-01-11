package openapisdk.models.operations;



public class PostDescribeLoggingStatusResponse {
    public byte[] body;
    public PostDescribeLoggingStatusResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeLoggingStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeLoggingStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}