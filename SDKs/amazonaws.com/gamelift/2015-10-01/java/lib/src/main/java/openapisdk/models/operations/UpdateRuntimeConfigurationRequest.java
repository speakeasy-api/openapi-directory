package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRuntimeConfigurationRequest {
    public UpdateRuntimeConfigurationHeaders headers;
    public UpdateRuntimeConfigurationRequest withHeaders(UpdateRuntimeConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateRuntimeConfigurationInput request;
    public UpdateRuntimeConfigurationRequest withRequest(openapisdk.models.shared.UpdateRuntimeConfigurationInput request) {
        this.request = request;
        return this;
    }
}