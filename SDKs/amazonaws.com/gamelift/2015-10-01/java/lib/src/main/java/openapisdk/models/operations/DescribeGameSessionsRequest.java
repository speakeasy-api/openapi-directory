package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeGameSessionsRequest {
    public DescribeGameSessionsQueryParams queryParams;
    public DescribeGameSessionsRequest withQueryParams(DescribeGameSessionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeGameSessionsHeaders headers;
    public DescribeGameSessionsRequest withHeaders(DescribeGameSessionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeGameSessionsInput request;
    public DescribeGameSessionsRequest withRequest(openapisdk.models.shared.DescribeGameSessionsInput request) {
        this.request = request;
        return this;
    }
}