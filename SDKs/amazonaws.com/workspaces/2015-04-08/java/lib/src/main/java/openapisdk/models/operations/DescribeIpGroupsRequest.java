package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeIpGroupsRequest {
    public DescribeIpGroupsHeaders headers;
    public DescribeIpGroupsRequest withHeaders(DescribeIpGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeIpGroupsRequest request;
    public DescribeIpGroupsRequest withRequest(openapisdk.models.shared.DescribeIpGroupsRequest request) {
        this.request = request;
        return this;
    }
}