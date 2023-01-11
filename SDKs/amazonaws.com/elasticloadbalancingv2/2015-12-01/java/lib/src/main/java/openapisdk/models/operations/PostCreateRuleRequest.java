package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateRuleRequest {
    public PostCreateRuleQueryParams queryParams;
    public PostCreateRuleRequest withQueryParams(PostCreateRuleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateRuleHeaders headers;
    public PostCreateRuleRequest withHeaders(PostCreateRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateRuleRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}