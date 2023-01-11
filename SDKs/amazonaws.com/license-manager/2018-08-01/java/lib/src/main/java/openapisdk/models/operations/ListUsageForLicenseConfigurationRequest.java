package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListUsageForLicenseConfigurationRequest {
    public ListUsageForLicenseConfigurationHeaders headers;
    public ListUsageForLicenseConfigurationRequest withHeaders(ListUsageForLicenseConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListUsageForLicenseConfigurationRequest request;
    public ListUsageForLicenseConfigurationRequest withRequest(openapisdk.models.shared.ListUsageForLicenseConfigurationRequest request) {
        this.request = request;
        return this;
    }
}