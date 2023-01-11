package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDevicePolicyConfigurationRequest {
    public UpdateDevicePolicyConfigurationHeaders headers;
    public UpdateDevicePolicyConfigurationRequest withHeaders(UpdateDevicePolicyConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateDevicePolicyConfigurationRequestBody request;
    public UpdateDevicePolicyConfigurationRequest withRequest(UpdateDevicePolicyConfigurationRequestBody request) {
        this.request = request;
        return this;
    }
}