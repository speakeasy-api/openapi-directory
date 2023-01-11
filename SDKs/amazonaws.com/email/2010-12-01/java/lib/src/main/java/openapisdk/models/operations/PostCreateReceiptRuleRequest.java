package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateReceiptRuleRequest {
    public PostCreateReceiptRuleQueryParams queryParams;
    public PostCreateReceiptRuleRequest withQueryParams(PostCreateReceiptRuleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateReceiptRuleHeaders headers;
    public PostCreateReceiptRuleRequest withHeaders(PostCreateReceiptRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateReceiptRuleRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}