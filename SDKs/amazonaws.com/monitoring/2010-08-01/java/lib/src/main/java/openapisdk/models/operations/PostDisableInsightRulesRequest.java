package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisableInsightRulesRequest {
    public PostDisableInsightRulesQueryParams queryParams;
    public PostDisableInsightRulesRequest withQueryParams(PostDisableInsightRulesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDisableInsightRulesHeaders headers;
    public PostDisableInsightRulesRequest withHeaders(PostDisableInsightRulesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDisableInsightRulesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}