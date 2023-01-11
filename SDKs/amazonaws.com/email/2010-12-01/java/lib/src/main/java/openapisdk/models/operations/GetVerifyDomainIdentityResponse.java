package openapisdk.models.operations;



public class GetVerifyDomainIdentityResponse {
    public byte[] body;
    public GetVerifyDomainIdentityResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetVerifyDomainIdentityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVerifyDomainIdentityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}