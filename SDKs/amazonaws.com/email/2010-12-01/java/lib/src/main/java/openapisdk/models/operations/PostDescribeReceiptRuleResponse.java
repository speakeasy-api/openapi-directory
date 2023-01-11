package openapisdk.models.operations;



public class PostDescribeReceiptRuleResponse {
    public byte[] body;
    public PostDescribeReceiptRuleResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeReceiptRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeReceiptRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}