package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeInstancesRequest {
    public DescribeInstancesQueryParams queryParams;
    public DescribeInstancesRequest withQueryParams(DescribeInstancesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeInstancesHeaders headers;
    public DescribeInstancesRequest withHeaders(DescribeInstancesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeInstancesInput request;
    public DescribeInstancesRequest withRequest(openapisdk.models.shared.DescribeInstancesInput request) {
        this.request = request;
        return this;
    }
}