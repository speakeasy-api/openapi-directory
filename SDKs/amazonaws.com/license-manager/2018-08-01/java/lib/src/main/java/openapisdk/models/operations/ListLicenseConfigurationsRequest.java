package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListLicenseConfigurationsRequest {
    public ListLicenseConfigurationsHeaders headers;
    public ListLicenseConfigurationsRequest withHeaders(ListLicenseConfigurationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListLicenseConfigurationsRequest request;
    public ListLicenseConfigurationsRequest withRequest(openapisdk.models.shared.ListLicenseConfigurationsRequest request) {
        this.request = request;
        return this;
    }
}