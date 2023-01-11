package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeJobLogItemsRequest {
    public DescribeJobLogItemsQueryParams queryParams;
    public DescribeJobLogItemsRequest withQueryParams(DescribeJobLogItemsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeJobLogItemsHeaders headers;
    public DescribeJobLogItemsRequest withHeaders(DescribeJobLogItemsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DescribeJobLogItemsRequestBody request;
    public DescribeJobLogItemsRequest withRequest(DescribeJobLogItemsRequestBody request) {
        this.request = request;
        return this;
    }
}