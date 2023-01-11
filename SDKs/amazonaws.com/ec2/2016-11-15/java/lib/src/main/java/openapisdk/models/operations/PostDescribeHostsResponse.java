package openapisdk.models.operations;



public class PostDescribeHostsResponse {
    public byte[] body;
    public PostDescribeHostsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeHostsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeHostsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}