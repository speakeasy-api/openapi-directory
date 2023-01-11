package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribePlayerSessionsRequest {
    public DescribePlayerSessionsQueryParams queryParams;
    public DescribePlayerSessionsRequest withQueryParams(DescribePlayerSessionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribePlayerSessionsHeaders headers;
    public DescribePlayerSessionsRequest withHeaders(DescribePlayerSessionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribePlayerSessionsInput request;
    public DescribePlayerSessionsRequest withRequest(openapisdk.models.shared.DescribePlayerSessionsInput request) {
        this.request = request;
        return this;
    }
}