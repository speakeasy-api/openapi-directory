package openapisdk.models.operations;



public class PostRevokeClusterSecurityGroupIngressResponse {
    public byte[] body;
    public PostRevokeClusterSecurityGroupIngressResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostRevokeClusterSecurityGroupIngressResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostRevokeClusterSecurityGroupIngressResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}