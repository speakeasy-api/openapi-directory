package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeSubnetGroupsRequest {
    public DescribeSubnetGroupsHeaders headers;
    public DescribeSubnetGroupsRequest withHeaders(DescribeSubnetGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeSubnetGroupsRequest request;
    public DescribeSubnetGroupsRequest withRequest(openapisdk.models.shared.DescribeSubnetGroupsRequest request) {
        this.request = request;
        return this;
    }
}