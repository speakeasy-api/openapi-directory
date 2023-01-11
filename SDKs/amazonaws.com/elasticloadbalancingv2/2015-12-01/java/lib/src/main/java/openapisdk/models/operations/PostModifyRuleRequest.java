package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyRuleRequest {
    public PostModifyRuleQueryParams queryParams;
    public PostModifyRuleRequest withQueryParams(PostModifyRuleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyRuleHeaders headers;
    public PostModifyRuleRequest withHeaders(PostModifyRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyRuleRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}