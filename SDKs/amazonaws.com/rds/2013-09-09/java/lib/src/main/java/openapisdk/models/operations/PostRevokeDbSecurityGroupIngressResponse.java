package openapisdk.models.operations;



public class PostRevokeDbSecurityGroupIngressResponse {
    public byte[] body;
    public PostRevokeDbSecurityGroupIngressResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostRevokeDbSecurityGroupIngressResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostRevokeDbSecurityGroupIngressResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}