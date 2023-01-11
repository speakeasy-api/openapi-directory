package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDistributionConfigurationRequest {
    public CreateDistributionConfigurationHeaders headers;
    public CreateDistributionConfigurationRequest withHeaders(CreateDistributionConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateDistributionConfigurationRequestBody request;
    public CreateDistributionConfigurationRequest withRequest(CreateDistributionConfigurationRequestBody request) {
        this.request = request;
        return this;
    }
}