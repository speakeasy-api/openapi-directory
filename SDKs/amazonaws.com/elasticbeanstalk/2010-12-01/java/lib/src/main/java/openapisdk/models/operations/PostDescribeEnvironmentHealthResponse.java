package openapisdk.models.operations;



public class PostDescribeEnvironmentHealthResponse {
    public byte[] body;
    public PostDescribeEnvironmentHealthResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeEnvironmentHealthResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeEnvironmentHealthResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}