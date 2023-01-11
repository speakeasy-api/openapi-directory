package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateLaunchConfigurationRequest {
    public UpdateLaunchConfigurationHeaders headers;
    public UpdateLaunchConfigurationRequest withHeaders(UpdateLaunchConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateLaunchConfigurationRequestBody request;
    public UpdateLaunchConfigurationRequest withRequest(UpdateLaunchConfigurationRequestBody request) {
        this.request = request;
        return this;
    }
}