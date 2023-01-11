package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeDirectConnectGatewayAttachmentsRequest {
    public DescribeDirectConnectGatewayAttachmentsHeaders headers;
    public DescribeDirectConnectGatewayAttachmentsRequest withHeaders(DescribeDirectConnectGatewayAttachmentsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeDirectConnectGatewayAttachmentsRequest request;
    public DescribeDirectConnectGatewayAttachmentsRequest withRequest(openapisdk.models.shared.DescribeDirectConnectGatewayAttachmentsRequest request) {
        this.request = request;
        return this;
    }
}