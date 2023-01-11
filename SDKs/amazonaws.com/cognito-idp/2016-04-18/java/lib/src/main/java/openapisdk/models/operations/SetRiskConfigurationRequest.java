package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetRiskConfigurationRequest {
    public SetRiskConfigurationHeaders headers;
    public SetRiskConfigurationRequest withHeaders(SetRiskConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetRiskConfigurationRequest request;
    public SetRiskConfigurationRequest withRequest(openapisdk.models.shared.SetRiskConfigurationRequest request) {
        this.request = request;
        return this;
    }
}