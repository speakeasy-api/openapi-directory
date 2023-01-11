package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCompanyNetworkConfigurationRequest {
    public UpdateCompanyNetworkConfigurationHeaders headers;
    public UpdateCompanyNetworkConfigurationRequest withHeaders(UpdateCompanyNetworkConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateCompanyNetworkConfigurationRequestBody request;
    public UpdateCompanyNetworkConfigurationRequest withRequest(UpdateCompanyNetworkConfigurationRequestBody request) {
        this.request = request;
        return this;
    }
}