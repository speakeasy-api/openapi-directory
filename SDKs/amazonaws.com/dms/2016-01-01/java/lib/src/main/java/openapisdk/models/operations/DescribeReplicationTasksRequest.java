package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeReplicationTasksRequest {
    public DescribeReplicationTasksQueryParams queryParams;
    public DescribeReplicationTasksRequest withQueryParams(DescribeReplicationTasksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeReplicationTasksHeaders headers;
    public DescribeReplicationTasksRequest withHeaders(DescribeReplicationTasksHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeReplicationTasksMessage request;
    public DescribeReplicationTasksRequest withRequest(openapisdk.models.shared.DescribeReplicationTasksMessage request) {
        this.request = request;
        return this;
    }
}