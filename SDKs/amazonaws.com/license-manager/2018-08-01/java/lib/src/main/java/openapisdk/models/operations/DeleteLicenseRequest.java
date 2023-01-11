package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteLicenseRequest {
    public DeleteLicenseHeaders headers;
    public DeleteLicenseRequest withHeaders(DeleteLicenseHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteLicenseRequest request;
    public DeleteLicenseRequest withRequest(openapisdk.models.shared.DeleteLicenseRequest request) {
        this.request = request;
        return this;
    }
}