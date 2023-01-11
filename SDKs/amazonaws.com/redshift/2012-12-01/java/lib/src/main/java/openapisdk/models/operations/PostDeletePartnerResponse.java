package openapisdk.models.operations;



public class PostDeletePartnerResponse {
    public byte[] body;
    public PostDeletePartnerResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDeletePartnerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDeletePartnerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}