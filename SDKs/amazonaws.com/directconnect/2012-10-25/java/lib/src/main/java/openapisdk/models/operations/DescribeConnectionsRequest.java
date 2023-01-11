package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeConnectionsRequest {
    public DescribeConnectionsHeaders headers;
    public DescribeConnectionsRequest withHeaders(DescribeConnectionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeConnectionsRequest request;
    public DescribeConnectionsRequest withRequest(openapisdk.models.shared.DescribeConnectionsRequest request) {
        this.request = request;
        return this;
    }
}