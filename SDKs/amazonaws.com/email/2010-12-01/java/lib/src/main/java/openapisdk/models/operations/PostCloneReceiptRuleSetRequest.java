package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCloneReceiptRuleSetRequest {
    public PostCloneReceiptRuleSetQueryParams queryParams;
    public PostCloneReceiptRuleSetRequest withQueryParams(PostCloneReceiptRuleSetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCloneReceiptRuleSetHeaders headers;
    public PostCloneReceiptRuleSetRequest withHeaders(PostCloneReceiptRuleSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCloneReceiptRuleSetRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}