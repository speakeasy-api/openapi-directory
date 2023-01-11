package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteInsightRulesRequest {
    public PostDeleteInsightRulesQueryParams queryParams;
    public PostDeleteInsightRulesRequest withQueryParams(PostDeleteInsightRulesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteInsightRulesHeaders headers;
    public PostDeleteInsightRulesRequest withHeaders(PostDeleteInsightRulesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteInsightRulesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}