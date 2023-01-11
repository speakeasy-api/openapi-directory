package openapisdk.models.operations;



public class PostAssumeRoleWithWebIdentityResponse {
    public byte[] body;
    public PostAssumeRoleWithWebIdentityResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostAssumeRoleWithWebIdentityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostAssumeRoleWithWebIdentityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}