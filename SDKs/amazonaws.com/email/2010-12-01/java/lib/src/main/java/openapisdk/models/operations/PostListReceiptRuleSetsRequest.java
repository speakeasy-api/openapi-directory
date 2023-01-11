package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListReceiptRuleSetsRequest {
    public PostListReceiptRuleSetsQueryParams queryParams;
    public PostListReceiptRuleSetsRequest withQueryParams(PostListReceiptRuleSetsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostListReceiptRuleSetsHeaders headers;
    public PostListReceiptRuleSetsRequest withHeaders(PostListReceiptRuleSetsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostListReceiptRuleSetsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}