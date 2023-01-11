package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateLicenseConfigurationRequest {
    public CreateLicenseConfigurationHeaders headers;
    public CreateLicenseConfigurationRequest withHeaders(CreateLicenseConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateLicenseConfigurationRequest request;
    public CreateLicenseConfigurationRequest withRequest(openapisdk.models.shared.CreateLicenseConfigurationRequest request) {
        this.request = request;
        return this;
    }
}