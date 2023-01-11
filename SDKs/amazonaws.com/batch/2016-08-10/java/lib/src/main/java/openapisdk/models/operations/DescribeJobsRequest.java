package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeJobsRequest {
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