package openapisdk.models.operations;



public class GetSetIdentityMailFromDomainResponse {
    public byte[] body;
    public GetSetIdentityMailFromDomainResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetSetIdentityMailFromDomainResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSetIdentityMailFromDomainResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}