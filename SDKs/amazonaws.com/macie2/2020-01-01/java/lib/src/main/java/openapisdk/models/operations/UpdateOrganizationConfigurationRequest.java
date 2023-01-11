package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateOrganizationConfigurationRequest {
    public UpdateOrganizationConfigurationHeaders headers;
    public UpdateOrganizationConfigurationRequest withHeaders(UpdateOrganizationConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateOrganizationConfigurationRequestBody request;
    public UpdateOrganizationConfigurationRequest withRequest(UpdateOrganizationConfigurationRequestBody request) {
        this.request = request;
        return this;
    }
}