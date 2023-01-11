package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateGatewayCapabilityConfigurationRequest {
    public UpdateGatewayCapabilityConfigurationPathParams pathParams;
    public UpdateGatewayCapabilityConfigurationRequest withPathParams(UpdateGatewayCapabilityConfigurationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateGatewayCapabilityConfigurationHeaders headers;
    public UpdateGatewayCapabilityConfigurationRequest withHeaders(UpdateGatewayCapabilityConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateGatewayCapabilityConfigurationRequestBody request;
    public UpdateGatewayCapabilityConfigurationRequest withRequest(UpdateGatewayCapabilityConfigurationRequestBody request) {
        this.request = request;
        return this;
    }
}