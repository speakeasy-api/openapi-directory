package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeReplicationInstancesRequest {
    public DescribeReplicationInstancesQueryParams queryParams;
    public DescribeReplicationInstancesRequest withQueryParams(DescribeReplicationInstancesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeReplicationInstancesHeaders headers;
    public DescribeReplicationInstancesRequest withHeaders(DescribeReplicationInstancesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeReplicationInstancesMessage request;
    public DescribeReplicationInstancesRequest withRequest(openapisdk.models.shared.DescribeReplicationInstancesMessage request) {
        this.request = request;
        return this;
    }
}