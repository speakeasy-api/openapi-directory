package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeJobQueuesRequest {
    public DescribeJobQueuesQueryParams queryParams;
    public DescribeJobQueuesRequest withQueryParams(DescribeJobQueuesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeJobQueuesHeaders headers;
    public DescribeJobQueuesRequest withHeaders(DescribeJobQueuesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DescribeJobQueuesRequestBody request;
    public DescribeJobQueuesRequest withRequest(DescribeJobQueuesRequestBody request) {
        this.request = request;
        return this;
    }
}