package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateLicenseConfigurationRequest {
    public UpdateLicenseConfigurationHeaders headers;
    public UpdateLicenseConfigurationRequest withHeaders(UpdateLicenseConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateLicenseConfigurationRequest request;
    public UpdateLicenseConfigurationRequest withRequest(openapisdk.models.shared.UpdateLicenseConfigurationRequest request) {
        this.request = request;
        return this;
    }
}