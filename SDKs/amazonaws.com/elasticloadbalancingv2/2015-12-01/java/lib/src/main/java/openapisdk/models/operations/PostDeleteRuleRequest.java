package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteRuleRequest {
    public PostDeleteRuleQueryParams queryParams;
    public PostDeleteRuleRequest withQueryParams(PostDeleteRuleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteRuleHeaders headers;
    public PostDeleteRuleRequest withHeaders(PostDeleteRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteRuleRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}