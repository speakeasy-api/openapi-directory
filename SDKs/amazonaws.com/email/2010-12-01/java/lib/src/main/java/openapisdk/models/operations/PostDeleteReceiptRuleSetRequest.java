package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteReceiptRuleSetRequest {
    public PostDeleteReceiptRuleSetQueryParams queryParams;
    public PostDeleteReceiptRuleSetRequest withQueryParams(PostDeleteReceiptRuleSetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteReceiptRuleSetHeaders headers;
    public PostDeleteReceiptRuleSetRequest withHeaders(PostDeleteReceiptRuleSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteReceiptRuleSetRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}