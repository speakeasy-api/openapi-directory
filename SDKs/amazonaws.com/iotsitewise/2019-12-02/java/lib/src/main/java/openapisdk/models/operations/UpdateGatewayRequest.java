package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateGatewayRequest {
    public UpdateGatewayPathParams pathParams;
    public UpdateGatewayRequest withPathParams(UpdateGatewayPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateGatewayHeaders headers;
    public UpdateGatewayRequest withHeaders(UpdateGatewayHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateGatewayRequestBody request;
    public UpdateGatewayRequest withRequest(UpdateGatewayRequestBody request) {
        this.request = request;
        return this;
    }
}