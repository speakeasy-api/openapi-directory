package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateInfrastructureConfigurationRequest {
    public UpdateInfrastructureConfigurationHeaders headers;
    public UpdateInfrastructureConfigurationRequest withHeaders(UpdateInfrastructureConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateInfrastructureConfigurationRequestBody request;
    public UpdateInfrastructureConfigurationRequest withRequest(UpdateInfrastructureConfigurationRequestBody request) {
        this.request = request;
        return this;
    }
}