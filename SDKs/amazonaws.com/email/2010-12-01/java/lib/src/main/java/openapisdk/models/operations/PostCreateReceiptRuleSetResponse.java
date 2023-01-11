package openapisdk.models.operations;



public class PostCreateReceiptRuleSetResponse {
    public byte[] body;
    public PostCreateReceiptRuleSetResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCreateReceiptRuleSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCreateReceiptRuleSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}