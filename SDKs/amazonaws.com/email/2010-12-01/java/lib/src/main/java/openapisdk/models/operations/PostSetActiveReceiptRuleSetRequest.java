package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetActiveReceiptRuleSetRequest {
    public PostSetActiveReceiptRuleSetQueryParams queryParams;
    public PostSetActiveReceiptRuleSetRequest withQueryParams(PostSetActiveReceiptRuleSetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostSetActiveReceiptRuleSetHeaders headers;
    public PostSetActiveReceiptRuleSetRequest withHeaders(PostSetActiveReceiptRuleSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostSetActiveReceiptRuleSetRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}