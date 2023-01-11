package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateReceiptRuleSetRequest {
    public PostCreateReceiptRuleSetQueryParams queryParams;
    public PostCreateReceiptRuleSetRequest withQueryParams(PostCreateReceiptRuleSetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateReceiptRuleSetHeaders headers;
    public PostCreateReceiptRuleSetRequest withHeaders(PostCreateReceiptRuleSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateReceiptRuleSetRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}