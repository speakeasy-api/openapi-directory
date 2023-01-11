package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateGatewayRequest {
    public CreateGatewayHeaders headers;
    public CreateGatewayRequest withHeaders(CreateGatewayHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateGatewayRequestBody request;
    public CreateGatewayRequest withRequest(CreateGatewayRequestBody request) {
        this.request = request;
        return this;
    }
}