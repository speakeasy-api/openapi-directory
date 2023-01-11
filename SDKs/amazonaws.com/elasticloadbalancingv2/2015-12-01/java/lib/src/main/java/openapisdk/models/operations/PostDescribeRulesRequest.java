package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeRulesRequest {
    public PostDescribeRulesQueryParams queryParams;
    public PostDescribeRulesRequest withQueryParams(PostDescribeRulesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeRulesHeaders headers;
    public PostDescribeRulesRequest withHeaders(PostDescribeRulesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeRulesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}