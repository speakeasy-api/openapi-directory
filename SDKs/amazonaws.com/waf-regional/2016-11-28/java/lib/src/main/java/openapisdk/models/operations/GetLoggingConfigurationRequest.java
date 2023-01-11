package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLoggingConfigurationRequest {
    public GetLoggingConfigurationHeaders headers;
    public GetLoggingConfigurationRequest withHeaders(GetLoggingConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetLoggingConfigurationRequest request;
    public GetLoggingConfigurationRequest withRequest(openapisdk.models.shared.GetLoggingConfigurationRequest request) {
        this.request = request;
        return this;
    }
}