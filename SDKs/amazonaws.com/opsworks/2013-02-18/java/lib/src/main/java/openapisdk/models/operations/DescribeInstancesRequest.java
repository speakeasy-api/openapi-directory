package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeInstancesRequest {
    public DescribeInstancesHeaders headers;
    public DescribeInstancesRequest withHeaders(DescribeInstancesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeInstancesRequest request;
    public DescribeInstancesRequest withRequest(openapisdk.models.shared.DescribeInstancesRequest request) {
        this.request = request;
        return this;
    }
}