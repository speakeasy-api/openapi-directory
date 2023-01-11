package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeComputeEnvironmentsRequest {
    public DescribeComputeEnvironmentsQueryParams queryParams;
    public DescribeComputeEnvironmentsRequest withQueryParams(DescribeComputeEnvironmentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeComputeEnvironmentsHeaders headers;
    public DescribeComputeEnvironmentsRequest withHeaders(DescribeComputeEnvironmentsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DescribeComputeEnvironmentsRequestBody request;
    public DescribeComputeEnvironmentsRequest withRequest(DescribeComputeEnvironmentsRequestBody request) {
        this.request = request;
        return this;
    }
}