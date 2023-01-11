package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeDirectConnectGatewayAssociationProposalsRequest {
    public DescribeDirectConnectGatewayAssociationProposalsHeaders headers;
    public DescribeDirectConnectGatewayAssociationProposalsRequest withHeaders(DescribeDirectConnectGatewayAssociationProposalsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeDirectConnectGatewayAssociationProposalsRequest request;
    public DescribeDirectConnectGatewayAssociationProposalsRequest withRequest(openapisdk.models.shared.DescribeDirectConnectGatewayAssociationProposalsRequest request) {
        this.request = request;
        return this;
    }
}