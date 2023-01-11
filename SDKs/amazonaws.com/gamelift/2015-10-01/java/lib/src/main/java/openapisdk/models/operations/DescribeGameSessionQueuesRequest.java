package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeGameSessionQueuesRequest {
    public DescribeGameSessionQueuesQueryParams queryParams;
    public DescribeGameSessionQueuesRequest withQueryParams(DescribeGameSessionQueuesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeGameSessionQueuesHeaders headers;
    public DescribeGameSessionQueuesRequest withHeaders(DescribeGameSessionQueuesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeGameSessionQueuesInput request;
    public DescribeGameSessionQueuesRequest withRequest(openapisdk.models.shared.DescribeGameSessionQueuesInput request) {
        this.request = request;
        return this;
    }
}