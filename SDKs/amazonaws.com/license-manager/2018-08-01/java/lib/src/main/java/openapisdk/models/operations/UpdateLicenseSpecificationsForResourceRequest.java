package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateLicenseSpecificationsForResourceRequest {
    public UpdateLicenseSpecificationsForResourceHeaders headers;
    public UpdateLicenseSpecificationsForResourceRequest withHeaders(UpdateLicenseSpecificationsForResourceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateLicenseSpecificationsForResourceRequest request;
    public UpdateLicenseSpecificationsForResourceRequest withRequest(openapisdk.models.shared.UpdateLicenseSpecificationsForResourceRequest request) {
        this.request = request;
        return this;
    }
}