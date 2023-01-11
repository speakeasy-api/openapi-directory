package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeLogGroupsRequest {
    public DescribeLogGroupsQueryParams queryParams;
    public DescribeLogGroupsRequest withQueryParams(DescribeLogGroupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeLogGroupsHeaders headers;
    public DescribeLogGroupsRequest withHeaders(DescribeLogGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeLogGroupsRequest request;
    public DescribeLogGroupsRequest withRequest(openapisdk.models.shared.DescribeLogGroupsRequest request) {
        this.request = request;
        return this;
    }
}