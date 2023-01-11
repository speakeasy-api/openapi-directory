package openapisdk.models.operations;



public class PostVerifyDomainDkimResponse {
    public byte[] body;
    public PostVerifyDomainDkimResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostVerifyDomainDkimResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostVerifyDomainDkimResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}