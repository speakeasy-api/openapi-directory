package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeConnectionsRequest {
    public DescribeConnectionsQueryParams queryParams;
    public DescribeConnectionsRequest withQueryParams(DescribeConnectionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeConnectionsHeaders headers;
    public DescribeConnectionsRequest withHeaders(DescribeConnectionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeConnectionsMessage request;
    public DescribeConnectionsRequest withRequest(openapisdk.models.shared.DescribeConnectionsMessage request) {
        this.request = request;
        return this;
    }
}