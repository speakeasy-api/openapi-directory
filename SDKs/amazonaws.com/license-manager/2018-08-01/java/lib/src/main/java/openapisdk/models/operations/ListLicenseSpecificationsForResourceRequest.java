package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListLicenseSpecificationsForResourceRequest {
    public ListLicenseSpecificationsForResourceHeaders headers;
    public ListLicenseSpecificationsForResourceRequest withHeaders(ListLicenseSpecificationsForResourceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListLicenseSpecificationsForResourceRequest request;
    public ListLicenseSpecificationsForResourceRequest withRequest(openapisdk.models.shared.ListLicenseSpecificationsForResourceRequest request) {
        this.request = request;
        return this;
    }
}