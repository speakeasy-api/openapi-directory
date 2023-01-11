package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEnableInsightRulesRequest {
    public PostEnableInsightRulesQueryParams queryParams;
    public PostEnableInsightRulesRequest withQueryParams(PostEnableInsightRulesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostEnableInsightRulesHeaders headers;
    public PostEnableInsightRulesRequest withHeaders(PostEnableInsightRulesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostEnableInsightRulesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}