package openapisdk.models.operations;



public class PostVerifyDomainIdentityResponse {
    public byte[] body;
    public PostVerifyDomainIdentityResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostVerifyDomainIdentityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostVerifyDomainIdentityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}