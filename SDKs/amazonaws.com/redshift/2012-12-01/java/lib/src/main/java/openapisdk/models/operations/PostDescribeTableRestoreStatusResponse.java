package openapisdk.models.operations;



public class PostDescribeTableRestoreStatusResponse {
    public byte[] body;
    public PostDescribeTableRestoreStatusResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeTableRestoreStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeTableRestoreStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}