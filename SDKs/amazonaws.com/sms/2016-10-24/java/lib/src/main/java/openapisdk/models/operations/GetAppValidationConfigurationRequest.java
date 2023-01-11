package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAppValidationConfigurationRequest {
    public GetAppValidationConfigurationHeaders headers;
    public GetAppValidationConfigurationRequest withHeaders(GetAppValidationConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetAppValidationConfigurationRequest request;
    public GetAppValidationConfigurationRequest withRequest(openapisdk.models.shared.GetAppValidationConfigurationRequest request) {
        this.request = request;
        return this;
    }
}