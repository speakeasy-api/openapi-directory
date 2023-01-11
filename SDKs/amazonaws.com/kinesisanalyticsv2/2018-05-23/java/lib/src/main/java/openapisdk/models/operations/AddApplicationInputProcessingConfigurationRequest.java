package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddApplicationInputProcessingConfigurationRequest {
    public AddApplicationInputProcessingConfigurationHeaders headers;
    public AddApplicationInputProcessingConfigurationRequest withHeaders(AddApplicationInputProcessingConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AddApplicationInputProcessingConfigurationRequest request;
    public AddApplicationInputProcessingConfigurationRequest withRequest(openapisdk.models.shared.AddApplicationInputProcessingConfigurationRequest request) {
        this.request = request;
        return this;
    }
}