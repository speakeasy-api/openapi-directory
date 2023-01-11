package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPutInsightRuleRequest {
    public PostPutInsightRuleQueryParams queryParams;
    public PostPutInsightRuleRequest withQueryParams(PostPutInsightRuleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostPutInsightRuleHeaders headers;
    public PostPutInsightRuleRequest withHeaders(PostPutInsightRuleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostPutInsightRuleRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}