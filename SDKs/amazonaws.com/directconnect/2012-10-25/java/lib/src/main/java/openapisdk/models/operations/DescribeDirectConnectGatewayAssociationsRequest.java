package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeDirectConnectGatewayAssociationsRequest {
    public DescribeDirectConnectGatewayAssociationsHeaders headers;
    public DescribeDirectConnectGatewayAssociationsRequest withHeaders(DescribeDirectConnectGatewayAssociationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeDirectConnectGatewayAssociationsRequest request;
    public DescribeDirectConnectGatewayAssociationsRequest withRequest(openapisdk.models.shared.DescribeDirectConnectGatewayAssociationsRequest request) {
        this.request = request;
        return this;
    }
}