package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateLoggingConfigurationRequest {
    public UpdateLoggingConfigurationHeaders headers;
    public UpdateLoggingConfigurationRequest withHeaders(UpdateLoggingConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateLoggingConfigurationRequest request;
    public UpdateLoggingConfigurationRequest withRequest(openapisdk.models.shared.UpdateLoggingConfigurationRequest request) {
        this.request = request;
        return this;
    }
}