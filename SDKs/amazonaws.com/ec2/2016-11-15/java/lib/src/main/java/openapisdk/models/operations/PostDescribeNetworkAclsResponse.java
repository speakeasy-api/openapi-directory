package openapisdk.models.operations;



public class PostDescribeNetworkAclsResponse {
    public byte[] body;
    public PostDescribeNetworkAclsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeNetworkAclsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeNetworkAclsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}