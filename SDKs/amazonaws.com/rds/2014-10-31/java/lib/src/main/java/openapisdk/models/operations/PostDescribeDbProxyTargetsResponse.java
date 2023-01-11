package openapisdk.models.operations;



public class PostDescribeDbProxyTargetsResponse {
    public byte[] body;
    public PostDescribeDbProxyTargetsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeDbProxyTargetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeDbProxyTargetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}