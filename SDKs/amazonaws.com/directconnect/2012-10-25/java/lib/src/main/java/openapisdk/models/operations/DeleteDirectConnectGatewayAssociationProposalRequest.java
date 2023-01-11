package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDirectConnectGatewayAssociationProposalRequest {
    public DeleteDirectConnectGatewayAssociationProposalHeaders headers;
    public DeleteDirectConnectGatewayAssociationProposalRequest withHeaders(DeleteDirectConnectGatewayAssociationProposalHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteDirectConnectGatewayAssociationProposalRequest request;
    public DeleteDirectConnectGatewayAssociationProposalRequest withRequest(openapisdk.models.shared.DeleteDirectConnectGatewayAssociationProposalRequest request) {
        this.request = request;
        return this;
    }
}