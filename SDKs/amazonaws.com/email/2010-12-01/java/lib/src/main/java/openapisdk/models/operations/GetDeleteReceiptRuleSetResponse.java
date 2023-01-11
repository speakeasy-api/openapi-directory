package openapisdk.models.operations;



public class GetDeleteReceiptRuleSetResponse {
    public byte[] body;
    public GetDeleteReceiptRuleSetResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDeleteReceiptRuleSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDeleteReceiptRuleSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}