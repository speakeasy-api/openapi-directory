package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLaunchConfigurationRequest {
    public GetLaunchConfigurationHeaders headers;
    public GetLaunchConfigurationRequest withHeaders(GetLaunchConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetLaunchConfigurationRequestBody request;
    public GetLaunchConfigurationRequest withRequest(GetLaunchConfigurationRequestBody request) {
        this.request = request;
        return this;
    }
}