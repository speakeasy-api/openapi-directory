package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeAccountOverviewRequest {
    public DescribeAccountOverviewHeaders headers;
    public DescribeAccountOverviewRequest withHeaders(DescribeAccountOverviewHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DescribeAccountOverviewRequestBody request;
    public DescribeAccountOverviewRequest withRequest(DescribeAccountOverviewRequestBody request) {
        this.request = request;
        return this;
    }
}