package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAutoScalingConfigurationRequest {
    public CreateAutoScalingConfigurationHeaders headers;
    public CreateAutoScalingConfigurationRequest withHeaders(CreateAutoScalingConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateAutoScalingConfigurationRequest request;
    public CreateAutoScalingConfigurationRequest withRequest(openapisdk.models.shared.CreateAutoScalingConfigurationRequest request) {
        this.request = request;
        return this;
    }
}