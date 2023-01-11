package openapisdk.models.operations;



public class PostSetIdentityMailFromDomainResponse {
    public byte[] body;
    public PostSetIdentityMailFromDomainResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostSetIdentityMailFromDomainResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostSetIdentityMailFromDomainResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}