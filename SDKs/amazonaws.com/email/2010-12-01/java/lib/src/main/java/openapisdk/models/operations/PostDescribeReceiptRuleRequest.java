package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeReceiptRuleRequest {
    public PostDescribeReceiptRuleQueryParams queryParams;
    public PostDescribeReceiptRuleRequest withQueryParams(PostDescribeReceiptRuleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeReceiptRuleHeaders headers;
    public PostDescribeReceiptRuleRequest withHeaders(PostDescribeReceiptRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeReceiptRuleRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}