package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateReceiptRuleRequest {
    public PostUpdateReceiptRuleQueryParams queryParams;
    public PostUpdateReceiptRuleRequest withQueryParams(PostUpdateReceiptRuleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostUpdateReceiptRuleHeaders headers;
    public PostUpdateReceiptRuleRequest withHeaders(PostUpdateReceiptRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostUpdateReceiptRuleRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}