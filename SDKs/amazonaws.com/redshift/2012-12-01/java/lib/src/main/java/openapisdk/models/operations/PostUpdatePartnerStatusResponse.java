package openapisdk.models.operations;



public class PostUpdatePartnerStatusResponse {
    public byte[] body;
    public PostUpdatePartnerStatusResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostUpdatePartnerStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostUpdatePartnerStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}