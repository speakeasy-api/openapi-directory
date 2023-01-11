package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDirectConnectGatewayAssociationProposalRequest {
    public CreateDirectConnectGatewayAssociationProposalHeaders headers;
    public CreateDirectConnectGatewayAssociationProposalRequest withHeaders(CreateDirectConnectGatewayAssociationProposalHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateDirectConnectGatewayAssociationProposalRequest request;
    public CreateDirectConnectGatewayAssociationProposalRequest withRequest(openapisdk.models.shared.CreateDirectConnectGatewayAssociationProposalRequest request) {
        this.request = request;
        return this;
    }
}