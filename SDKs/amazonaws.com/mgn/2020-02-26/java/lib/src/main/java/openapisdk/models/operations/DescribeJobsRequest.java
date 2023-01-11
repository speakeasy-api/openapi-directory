package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeJobsRequest {
    public DescribeJobsQueryParams queryParams;
    public DescribeJobsRequest withQueryParams(DescribeJobsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeJobsHeaders headers;
    public DescribeJobsRequest withHeaders(DescribeJobsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DescribeJobsRequestBody request;
    public DescribeJobsRequest withRequest(DescribeJobsRequestBody request) {
        this.request = request;
        return this;
    }
}