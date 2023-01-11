package openapisdk.models.operations;



public class PostDescribeDataSharesResponse {
    public byte[] body;
    public PostDescribeDataSharesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeDataSharesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeDataSharesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}