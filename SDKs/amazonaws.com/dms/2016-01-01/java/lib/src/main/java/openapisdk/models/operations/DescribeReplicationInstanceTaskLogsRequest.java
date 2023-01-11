package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeReplicationInstanceTaskLogsRequest {
    public DescribeReplicationInstanceTaskLogsQueryParams queryParams;
    public DescribeReplicationInstanceTaskLogsRequest withQueryParams(DescribeReplicationInstanceTaskLogsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeReplicationInstanceTaskLogsHeaders headers;
    public DescribeReplicationInstanceTaskLogsRequest withHeaders(DescribeReplicationInstanceTaskLogsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeReplicationInstanceTaskLogsMessage request;
    public DescribeReplicationInstanceTaskLogsRequest withRequest(openapisdk.models.shared.DescribeReplicationInstanceTaskLogsMessage request) {
        this.request = request;
        return this;
    }
}