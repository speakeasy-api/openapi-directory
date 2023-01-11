package openapisdk.models.operations;



public class PostDescribeInstancesHealthResponse {
    public byte[] body;
    public PostDescribeInstancesHealthResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeInstancesHealthResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeInstancesHealthResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}