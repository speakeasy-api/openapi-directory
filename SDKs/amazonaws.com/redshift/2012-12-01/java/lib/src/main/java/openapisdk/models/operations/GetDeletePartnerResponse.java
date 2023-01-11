package openapisdk.models.operations;



public class GetDeletePartnerResponse {
    public byte[] body;
    public GetDeletePartnerResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDeletePartnerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDeletePartnerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}