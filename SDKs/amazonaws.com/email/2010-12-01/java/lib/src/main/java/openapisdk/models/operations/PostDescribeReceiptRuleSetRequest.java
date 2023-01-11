package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeReceiptRuleSetRequest {
    public PostDescribeReceiptRuleSetQueryParams queryParams;
    public PostDescribeReceiptRuleSetRequest withQueryParams(PostDescribeReceiptRuleSetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeReceiptRuleSetHeaders headers;
    public PostDescribeReceiptRuleSetRequest withHeaders(PostDescribeReceiptRuleSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeReceiptRuleSetRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}