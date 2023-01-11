package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDirectConnectGatewayAssociationRequest {
    public CreateDirectConnectGatewayAssociationHeaders headers;
    public CreateDirectConnectGatewayAssociationRequest withHeaders(CreateDirectConnectGatewayAssociationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateDirectConnectGatewayAssociationRequest request;
    public CreateDirectConnectGatewayAssociationRequest withRequest(openapisdk.models.shared.CreateDirectConnectGatewayAssociationRequest request) {
        this.request = request;
        return this;
    }
}