package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSecurityConfigurationRequest {
    public CreateSecurityConfigurationHeaders headers;
    public CreateSecurityConfigurationRequest withHeaders(CreateSecurityConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateSecurityConfigurationRequest request;
    public CreateSecurityConfigurationRequest withRequest(openapisdk.models.shared.CreateSecurityConfigurationRequest request) {
        this.request = request;
        return this;
    }
}