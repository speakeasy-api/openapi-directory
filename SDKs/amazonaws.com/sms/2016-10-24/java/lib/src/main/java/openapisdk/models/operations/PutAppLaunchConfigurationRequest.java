package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutAppLaunchConfigurationRequest {
    public PutAppLaunchConfigurationHeaders headers;
    public PutAppLaunchConfigurationRequest withHeaders(PutAppLaunchConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutAppLaunchConfigurationRequest request;
    public PutAppLaunchConfigurationRequest withRequest(openapisdk.models.shared.PutAppLaunchConfigurationRequest request) {
        this.request = request;
        return this;
    }
}