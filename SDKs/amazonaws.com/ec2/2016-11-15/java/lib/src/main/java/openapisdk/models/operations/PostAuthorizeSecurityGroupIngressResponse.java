package openapisdk.models.operations;



public class PostAuthorizeSecurityGroupIngressResponse {
    public byte[] body;
    public PostAuthorizeSecurityGroupIngressResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostAuthorizeSecurityGroupIngressResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostAuthorizeSecurityGroupIngressResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}