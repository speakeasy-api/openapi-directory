package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDirectConnectGatewayAssociationRequest {
    public DeleteDirectConnectGatewayAssociationHeaders headers;
    public DeleteDirectConnectGatewayAssociationRequest withHeaders(DeleteDirectConnectGatewayAssociationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteDirectConnectGatewayAssociationRequest request;
    public DeleteDirectConnectGatewayAssociationRequest withRequest(openapisdk.models.shared.DeleteDirectConnectGatewayAssociationRequest request) {
        this.request = request;
        return this;
    }
}