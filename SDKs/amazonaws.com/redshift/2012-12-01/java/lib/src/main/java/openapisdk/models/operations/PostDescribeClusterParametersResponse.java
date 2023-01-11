package openapisdk.models.operations;



public class PostDescribeClusterParametersResponse {
    public byte[] body;
    public PostDescribeClusterParametersResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeClusterParametersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeClusterParametersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}