package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateComponentConfigurationRequest {
    public UpdateComponentConfigurationHeaders headers;
    public UpdateComponentConfigurationRequest withHeaders(UpdateComponentConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateComponentConfigurationRequest request;
    public UpdateComponentConfigurationRequest withRequest(openapisdk.models.shared.UpdateComponentConfigurationRequest request) {
        this.request = request;
        return this;
    }
}