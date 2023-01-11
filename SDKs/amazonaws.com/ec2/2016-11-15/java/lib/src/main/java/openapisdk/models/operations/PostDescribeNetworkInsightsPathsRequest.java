package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeNetworkInsightsPathsRequest {
    public PostDescribeNetworkInsightsPathsQueryParams queryParams;
    public PostDescribeNetworkInsightsPathsRequest withQueryParams(PostDescribeNetworkInsightsPathsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeNetworkInsightsPathsHeaders headers;
    public PostDescribeNetworkInsightsPathsRequest withHeaders(PostDescribeNetworkInsightsPathsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeNetworkInsightsPathsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}