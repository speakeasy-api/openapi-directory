package openapisdk.models.operations;



public class GetGetSendQuotaResponse {
    public byte[] body;
    public GetGetSendQuotaResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetGetSendQuotaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetGetSendQuotaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}