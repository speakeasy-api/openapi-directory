package openapisdk.models.operations;



public class PostDescribeReceiptRuleSetResponse {
    public byte[] body;
    public PostDescribeReceiptRuleSetResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeReceiptRuleSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeReceiptRuleSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}