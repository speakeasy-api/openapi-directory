package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeInsightRulesRequest {
    public PostDescribeInsightRulesQueryParams queryParams;
    public PostDescribeInsightRulesRequest withQueryParams(PostDescribeInsightRulesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeInsightRulesHeaders headers;
    public PostDescribeInsightRulesRequest withHeaders(PostDescribeInsightRulesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeInsightRulesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}