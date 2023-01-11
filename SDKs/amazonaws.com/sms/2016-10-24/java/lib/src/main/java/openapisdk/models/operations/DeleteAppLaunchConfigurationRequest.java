package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAppLaunchConfigurationRequest {
    public DeleteAppLaunchConfigurationHeaders headers;
    public DeleteAppLaunchConfigurationRequest withHeaders(DeleteAppLaunchConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteAppLaunchConfigurationRequest request;
    public DeleteAppLaunchConfigurationRequest withRequest(openapisdk.models.shared.DeleteAppLaunchConfigurationRequest request) {
        this.request = request;
        return this;
    }
}