package openapisdk.models.operations;



public class PostDescribeApplicationVersionsResponse {
    public byte[] body;
    public PostDescribeApplicationVersionsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeApplicationVersionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeApplicationVersionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}