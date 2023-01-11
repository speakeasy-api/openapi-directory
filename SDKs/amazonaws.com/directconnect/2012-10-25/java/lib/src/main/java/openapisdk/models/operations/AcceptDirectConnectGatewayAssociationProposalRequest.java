package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AcceptDirectConnectGatewayAssociationProposalRequest {
    public AcceptDirectConnectGatewayAssociationProposalHeaders headers;
    public AcceptDirectConnectGatewayAssociationProposalRequest withHeaders(AcceptDirectConnectGatewayAssociationProposalHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AcceptDirectConnectGatewayAssociationProposalRequest request;
    public AcceptDirectConnectGatewayAssociationProposalRequest withRequest(openapisdk.models.shared.AcceptDirectConnectGatewayAssociationProposalRequest request) {
        this.request = request;
        return this;
    }
}