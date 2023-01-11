package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeRankExpressionsRequest {
    public PostDescribeRankExpressionsQueryParams queryParams;
    public PostDescribeRankExpressionsRequest withQueryParams(PostDescribeRankExpressionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeRankExpressionsHeaders headers;
    public PostDescribeRankExpressionsRequest withHeaders(PostDescribeRankExpressionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeRankExpressionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}