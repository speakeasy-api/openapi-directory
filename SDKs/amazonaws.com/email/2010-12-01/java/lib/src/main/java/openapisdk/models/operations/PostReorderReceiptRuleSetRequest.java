package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostReorderReceiptRuleSetRequest {
    public PostReorderReceiptRuleSetQueryParams queryParams;
    public PostReorderReceiptRuleSetRequest withQueryParams(PostReorderReceiptRuleSetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostReorderReceiptRuleSetHeaders headers;
    public PostReorderReceiptRuleSetRequest withHeaders(PostReorderReceiptRuleSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostReorderReceiptRuleSetRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}