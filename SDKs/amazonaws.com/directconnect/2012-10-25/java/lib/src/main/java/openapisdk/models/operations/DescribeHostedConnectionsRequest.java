package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeHostedConnectionsRequest {
    public DescribeHostedConnectionsHeaders headers;
    public DescribeHostedConnectionsRequest withHeaders(DescribeHostedConnectionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeHostedConnectionsRequest request;
    public DescribeHostedConnectionsRequest withRequest(openapisdk.models.shared.DescribeHostedConnectionsRequest request) {
        this.request = request;
        return this;
    }
}