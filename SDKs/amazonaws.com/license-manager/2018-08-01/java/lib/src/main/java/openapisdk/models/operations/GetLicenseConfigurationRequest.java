package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLicenseConfigurationRequest {
    public GetLicenseConfigurationHeaders headers;
    public GetLicenseConfigurationRequest withHeaders(GetLicenseConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetLicenseConfigurationRequest request;
    public GetLicenseConfigurationRequest withRequest(openapisdk.models.shared.GetLicenseConfigurationRequest request) {
        this.request = request;
        return this;
    }
}