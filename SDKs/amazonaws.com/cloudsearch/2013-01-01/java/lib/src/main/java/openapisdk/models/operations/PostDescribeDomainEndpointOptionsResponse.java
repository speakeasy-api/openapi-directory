package openapisdk.models.operations;



public class PostDescribeDomainEndpointOptionsResponse {
    public byte[] body;
    public PostDescribeDomainEndpointOptionsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeDomainEndpointOptionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeDomainEndpointOptionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}