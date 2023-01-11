package openapisdk.models.operations;



public class GetVerifyDomainDkimResponse {
    public byte[] body;
    public GetVerifyDomainDkimResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetVerifyDomainDkimResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVerifyDomainDkimResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}