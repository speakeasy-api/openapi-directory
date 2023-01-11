package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeParameterGroupsRequest {
    public DescribeParameterGroupsHeaders headers;
    public DescribeParameterGroupsRequest withHeaders(DescribeParameterGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeParameterGroupsRequest request;
    public DescribeParameterGroupsRequest withRequest(openapisdk.models.shared.DescribeParameterGroupsRequest request) {
        this.request = request;
        return this;
    }
}