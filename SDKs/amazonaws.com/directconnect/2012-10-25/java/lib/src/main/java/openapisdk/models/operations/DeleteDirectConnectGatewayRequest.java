package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDirectConnectGatewayRequest {
    public DeleteDirectConnectGatewayHeaders headers;
    public DeleteDirectConnectGatewayRequest withHeaders(DeleteDirectConnectGatewayHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteDirectConnectGatewayRequest request;
    public DeleteDirectConnectGatewayRequest withRequest(openapisdk.models.shared.DeleteDirectConnectGatewayRequest request) {
        this.request = request;
        return this;
    }
}