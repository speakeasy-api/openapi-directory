package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteLicenseConfigurationRequest {
    public DeleteLicenseConfigurationHeaders headers;
    public DeleteLicenseConfigurationRequest withHeaders(DeleteLicenseConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteLicenseConfigurationRequest request;
    public DeleteLicenseConfigurationRequest withRequest(openapisdk.models.shared.DeleteLicenseConfigurationRequest request) {
        this.request = request;
        return this;
    }
}