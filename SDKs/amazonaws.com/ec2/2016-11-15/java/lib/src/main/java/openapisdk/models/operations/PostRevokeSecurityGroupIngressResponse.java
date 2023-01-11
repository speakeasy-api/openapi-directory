package openapisdk.models.operations;



public class PostRevokeSecurityGroupIngressResponse {
    public byte[] body;
    public PostRevokeSecurityGroupIngressResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostRevokeSecurityGroupIngressResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostRevokeSecurityGroupIngressResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}