package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeConnectionsOnInterconnectRequest {
    public DescribeConnectionsOnInterconnectHeaders headers;
    public DescribeConnectionsOnInterconnectRequest withHeaders(DescribeConnectionsOnInterconnectHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeConnectionsOnInterconnectRequest request;
    public DescribeConnectionsOnInterconnectRequest withRequest(openapisdk.models.shared.DescribeConnectionsOnInterconnectRequest request) {
        this.request = request;
        return this;
    }
}