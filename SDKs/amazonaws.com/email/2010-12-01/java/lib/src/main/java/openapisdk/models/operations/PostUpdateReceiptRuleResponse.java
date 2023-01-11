package openapisdk.models.operations;



public class PostUpdateReceiptRuleResponse {
    public byte[] body;
    public PostUpdateReceiptRuleResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostUpdateReceiptRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostUpdateReceiptRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}