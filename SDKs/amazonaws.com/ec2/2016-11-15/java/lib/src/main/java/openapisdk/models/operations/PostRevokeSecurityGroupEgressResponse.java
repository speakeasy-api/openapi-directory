package openapisdk.models.operations;



public class PostRevokeSecurityGroupEgressResponse {
    public byte[] body;
    public PostRevokeSecurityGroupEgressResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostRevokeSecurityGroupEgressResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostRevokeSecurityGroupEgressResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}