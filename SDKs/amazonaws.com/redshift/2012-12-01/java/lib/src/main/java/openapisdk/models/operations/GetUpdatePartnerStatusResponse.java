package openapisdk.models.operations;



public class GetUpdatePartnerStatusResponse {
    public byte[] body;
    public GetUpdatePartnerStatusResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetUpdatePartnerStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUpdatePartnerStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}