package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateInfrastructureConfigurationRequest {
    public CreateInfrastructureConfigurationHeaders headers;
    public CreateInfrastructureConfigurationRequest withHeaders(CreateInfrastructureConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateInfrastructureConfigurationRequestBody request;
    public CreateInfrastructureConfigurationRequest withRequest(CreateInfrastructureConfigurationRequestBody request) {
        this.request = request;
        return this;
    }
}