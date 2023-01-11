package openapisdk.models.operations;



public class PostDescribeSubnetsResponse {
    public byte[] body;
    public PostDescribeSubnetsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeSubnetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeSubnetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}