package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutLoggingConfigurationRequest {
    public PutLoggingConfigurationHeaders headers;
    public PutLoggingConfigurationRequest withHeaders(PutLoggingConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutLoggingConfigurationRequest request;
    public PutLoggingConfigurationRequest withRequest(openapisdk.models.shared.PutLoggingConfigurationRequest request) {
        this.request = request;
        return this;
    }
}