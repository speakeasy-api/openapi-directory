package openapisdk.models.operations;



public class PostAuthorizeSecurityGroupEgressResponse {
    public byte[] body;
    public PostAuthorizeSecurityGroupEgressResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostAuthorizeSecurityGroupEgressResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostAuthorizeSecurityGroupEgressResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}