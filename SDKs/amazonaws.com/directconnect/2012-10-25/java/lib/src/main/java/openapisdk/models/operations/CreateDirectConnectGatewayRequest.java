package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDirectConnectGatewayRequest {
    public CreateDirectConnectGatewayHeaders headers;
    public CreateDirectConnectGatewayRequest withHeaders(CreateDirectConnectGatewayHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateDirectConnectGatewayRequest request;
    public CreateDirectConnectGatewayRequest withRequest(openapisdk.models.shared.CreateDirectConnectGatewayRequest request) {
        this.request = request;
        return this;
    }
}