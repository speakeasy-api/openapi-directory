package openapisdk.models.operations;



public class PostGetSendQuotaResponse {
    public byte[] body;
    public PostGetSendQuotaResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostGetSendQuotaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostGetSendQuotaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}