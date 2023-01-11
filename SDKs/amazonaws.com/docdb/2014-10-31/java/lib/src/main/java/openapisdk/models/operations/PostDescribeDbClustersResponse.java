package openapisdk.models.operations;



public class PostDescribeDbClustersResponse {
    public byte[] body;
    public PostDescribeDbClustersResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeDbClustersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeDbClustersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}