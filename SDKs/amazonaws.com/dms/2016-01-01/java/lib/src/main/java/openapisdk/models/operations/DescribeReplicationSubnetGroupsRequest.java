package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeReplicationSubnetGroupsRequest {
    public DescribeReplicationSubnetGroupsQueryParams queryParams;
    public DescribeReplicationSubnetGroupsRequest withQueryParams(DescribeReplicationSubnetGroupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeReplicationSubnetGroupsHeaders headers;
    public DescribeReplicationSubnetGroupsRequest withHeaders(DescribeReplicationSubnetGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeReplicationSubnetGroupsMessage request;
    public DescribeReplicationSubnetGroupsRequest withRequest(openapisdk.models.shared.DescribeReplicationSubnetGroupsMessage request) {
        this.request = request;
        return this;
    }
}