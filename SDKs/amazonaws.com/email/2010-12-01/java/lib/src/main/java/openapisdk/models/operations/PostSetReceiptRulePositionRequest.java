package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetReceiptRulePositionRequest {
    public PostSetReceiptRulePositionQueryParams queryParams;
    public PostSetReceiptRulePositionRequest withQueryParams(PostSetReceiptRulePositionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostSetReceiptRulePositionHeaders headers;
    public PostSetReceiptRulePositionRequest withHeaders(PostSetReceiptRulePositionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostSetReceiptRulePositionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}