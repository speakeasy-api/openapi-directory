package openapisdk.models.operations;



public class PostDescribeUsageLimitsResponse {
    public byte[] body;
    public PostDescribeUsageLimitsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeUsageLimitsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeUsageLimitsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}