package openapisdk.models.operations;



public class PostDescribeSecurityGroupRulesResponse {
    public byte[] body;
    public PostDescribeSecurityGroupRulesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeSecurityGroupRulesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeSecurityGroupRulesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}