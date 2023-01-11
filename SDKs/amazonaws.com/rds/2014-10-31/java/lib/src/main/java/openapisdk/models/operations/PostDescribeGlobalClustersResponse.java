package openapisdk.models.operations;



public class PostDescribeGlobalClustersResponse {
    public byte[] body;
    public PostDescribeGlobalClustersResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeGlobalClustersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeGlobalClustersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}