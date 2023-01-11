package openapisdk.models.operations;



public class PostDescribeStaleSecurityGroupsResponse {
    public byte[] body;
    public PostDescribeStaleSecurityGroupsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeStaleSecurityGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeStaleSecurityGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}