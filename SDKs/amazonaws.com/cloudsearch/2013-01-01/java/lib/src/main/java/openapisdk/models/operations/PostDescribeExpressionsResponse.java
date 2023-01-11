package openapisdk.models.operations;



public class PostDescribeExpressionsResponse {
    public byte[] body;
    public PostDescribeExpressionsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeExpressionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeExpressionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}