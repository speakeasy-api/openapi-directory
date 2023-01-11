package openapisdk.models.operations;



public class PostCreateReceiptRuleResponse {
    public byte[] body;
    public PostCreateReceiptRuleResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCreateReceiptRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCreateReceiptRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}