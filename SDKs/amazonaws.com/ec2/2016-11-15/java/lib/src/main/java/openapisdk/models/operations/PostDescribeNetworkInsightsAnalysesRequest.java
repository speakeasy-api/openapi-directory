package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeNetworkInsightsAnalysesRequest {
    public PostDescribeNetworkInsightsAnalysesQueryParams queryParams;
    public PostDescribeNetworkInsightsAnalysesRequest withQueryParams(PostDescribeNetworkInsightsAnalysesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeNetworkInsightsAnalysesHeaders headers;
    public PostDescribeNetworkInsightsAnalysesRequest withHeaders(PostDescribeNetworkInsightsAnalysesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeNetworkInsightsAnalysesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}