package openapisdk.models.operations;



public class PostDomainMetadataResponse {
    public byte[] body;
    public PostDomainMetadataResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDomainMetadataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDomainMetadataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}