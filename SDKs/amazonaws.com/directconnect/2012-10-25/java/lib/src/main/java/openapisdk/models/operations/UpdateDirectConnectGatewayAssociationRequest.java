package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDirectConnectGatewayAssociationRequest {
    public UpdateDirectConnectGatewayAssociationHeaders headers;
    public UpdateDirectConnectGatewayAssociationRequest withHeaders(UpdateDirectConnectGatewayAssociationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateDirectConnectGatewayAssociationRequest request;
    public UpdateDirectConnectGatewayAssociationRequest withRequest(openapisdk.models.shared.UpdateDirectConnectGatewayAssociationRequest request) {
        this.request = request;
        return this;
    }
}