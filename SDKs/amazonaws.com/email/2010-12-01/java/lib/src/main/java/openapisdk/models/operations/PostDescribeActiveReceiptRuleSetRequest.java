package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeActiveReceiptRuleSetRequest {
    public PostDescribeActiveReceiptRuleSetQueryParams queryParams;
    public PostDescribeActiveReceiptRuleSetRequest withQueryParams(PostDescribeActiveReceiptRuleSetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeActiveReceiptRuleSetHeaders headers;
    public PostDescribeActiveReceiptRuleSetRequest withHeaders(PostDescribeActiveReceiptRuleSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeActiveReceiptRuleSetRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}