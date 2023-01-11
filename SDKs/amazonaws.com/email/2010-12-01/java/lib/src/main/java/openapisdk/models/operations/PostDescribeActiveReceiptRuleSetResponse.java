package openapisdk.models.operations;



public class PostDescribeActiveReceiptRuleSetResponse {
    public byte[] body;
    public PostDescribeActiveReceiptRuleSetResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeActiveReceiptRuleSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeActiveReceiptRuleSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}