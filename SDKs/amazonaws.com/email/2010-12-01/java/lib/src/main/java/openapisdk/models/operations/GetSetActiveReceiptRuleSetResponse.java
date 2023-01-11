package openapisdk.models.operations;



public class GetSetActiveReceiptRuleSetResponse {
    public byte[] body;
    public GetSetActiveReceiptRuleSetResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetSetActiveReceiptRuleSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSetActiveReceiptRuleSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}