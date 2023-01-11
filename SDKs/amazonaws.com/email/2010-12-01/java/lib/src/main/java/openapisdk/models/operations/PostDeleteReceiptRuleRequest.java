package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteReceiptRuleRequest {
    public PostDeleteReceiptRuleQueryParams queryParams;
    public PostDeleteReceiptRuleRequest withQueryParams(PostDeleteReceiptRuleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteReceiptRuleHeaders headers;
    public PostDeleteReceiptRuleRequest withHeaders(PostDeleteReceiptRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteReceiptRuleRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}