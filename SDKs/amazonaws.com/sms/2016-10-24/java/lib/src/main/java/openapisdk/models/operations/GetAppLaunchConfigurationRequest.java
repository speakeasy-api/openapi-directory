package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAppLaunchConfigurationRequest {
    public GetAppLaunchConfigurationHeaders headers;
    public GetAppLaunchConfigurationRequest withHeaders(GetAppLaunchConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetAppLaunchConfigurationRequest request;
    public GetAppLaunchConfigurationRequest withRequest(openapisdk.models.shared.GetAppLaunchConfigurationRequest request) {
        this.request = request;
        return this;
    }
}