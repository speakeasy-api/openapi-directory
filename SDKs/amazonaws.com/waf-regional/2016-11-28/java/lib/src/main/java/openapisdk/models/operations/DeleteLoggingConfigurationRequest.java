package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteLoggingConfigurationRequest {
    public DeleteLoggingConfigurationHeaders headers;
    public DeleteLoggingConfigurationRequest withHeaders(DeleteLoggingConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteLoggingConfigurationRequest request;
    public DeleteLoggingConfigurationRequest withRequest(openapisdk.models.shared.DeleteLoggingConfigurationRequest request) {
        this.request = request;
        return this;
    }
}