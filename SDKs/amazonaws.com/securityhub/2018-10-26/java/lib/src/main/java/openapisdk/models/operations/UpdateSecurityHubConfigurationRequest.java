package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSecurityHubConfigurationRequest {
    public UpdateSecurityHubConfigurationHeaders headers;
    public UpdateSecurityHubConfigurationRequest withHeaders(UpdateSecurityHubConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateSecurityHubConfigurationRequestBody request;
    public UpdateSecurityHubConfigurationRequest withRequest(UpdateSecurityHubConfigurationRequestBody request) {
        this.request = request;
        return this;
    }
}