package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateIndexingConfigurationRequest {
    public UpdateIndexingConfigurationHeaders headers;
    public UpdateIndexingConfigurationRequest withHeaders(UpdateIndexingConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateIndexingConfigurationRequestBody request;
    public UpdateIndexingConfigurationRequest withRequest(UpdateIndexingConfigurationRequestBody request) {
        this.request = request;
        return this;
    }
}