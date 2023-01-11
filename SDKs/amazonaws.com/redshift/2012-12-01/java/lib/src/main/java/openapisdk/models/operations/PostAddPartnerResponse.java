package openapisdk.models.operations;



public class PostAddPartnerResponse {
    public byte[] body;
    public PostAddPartnerResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostAddPartnerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostAddPartnerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}