package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeDirectConnectGatewaysRequest {
    public DescribeDirectConnectGatewaysHeaders headers;
    public DescribeDirectConnectGatewaysRequest withHeaders(DescribeDirectConnectGatewaysHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeDirectConnectGatewaysRequest request;
    public DescribeDirectConnectGatewaysRequest withRequest(openapisdk.models.shared.DescribeDirectConnectGatewaysRequest request) {
        this.request = request;
        return this;
    }
}