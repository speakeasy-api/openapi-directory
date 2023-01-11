package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeOrderableReplicationInstancesRequest {
    public DescribeOrderableReplicationInstancesQueryParams queryParams;
    public DescribeOrderableReplicationInstancesRequest withQueryParams(DescribeOrderableReplicationInstancesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeOrderableReplicationInstancesHeaders headers;
    public DescribeOrderableReplicationInstancesRequest withHeaders(DescribeOrderableReplicationInstancesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeOrderableReplicationInstancesMessage request;
    public DescribeOrderableReplicationInstancesRequest withRequest(openapisdk.models.shared.DescribeOrderableReplicationInstancesMessage request) {
        this.request = request;
        return this;
    }
}