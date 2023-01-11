package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAssociationsForLicenseConfigurationRequest {
    public ListAssociationsForLicenseConfigurationHeaders headers;
    public ListAssociationsForLicenseConfigurationRequest withHeaders(ListAssociationsForLicenseConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListAssociationsForLicenseConfigurationRequest request;
    public ListAssociationsForLicenseConfigurationRequest withRequest(openapisdk.models.shared.ListAssociationsForLicenseConfigurationRequest request) {
        this.request = request;
        return this;
    }
}