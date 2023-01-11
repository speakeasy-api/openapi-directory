package openapisdk.models.operations;



public class PostDescribeInstanceRefreshesResponse {
    public byte[] body;
    public PostDescribeInstanceRefreshesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeInstanceRefreshesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeInstanceRefreshesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}