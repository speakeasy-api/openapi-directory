package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeResourceGroupsRequest {
    public DescribeResourceGroupsHeaders headers;
    public DescribeResourceGroupsRequest withHeaders(DescribeResourceGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeResourceGroupsRequest request;
    public DescribeResourceGroupsRequest withRequest(openapisdk.models.shared.DescribeResourceGroupsRequest request) {
        this.request = request;
        return this;
    }
}