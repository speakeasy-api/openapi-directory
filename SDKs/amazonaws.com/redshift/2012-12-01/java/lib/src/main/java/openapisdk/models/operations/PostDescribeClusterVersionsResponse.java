package openapisdk.models.operations;



public class PostDescribeClusterVersionsResponse {
    public byte[] body;
    public PostDescribeClusterVersionsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeClusterVersionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeClusterVersionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}