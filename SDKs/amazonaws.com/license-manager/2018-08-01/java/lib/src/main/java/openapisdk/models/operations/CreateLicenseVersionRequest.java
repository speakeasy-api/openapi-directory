package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateLicenseVersionRequest {
    public CreateLicenseVersionHeaders headers;
    public CreateLicenseVersionRequest withHeaders(CreateLicenseVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateLicenseVersionRequest request;
    public CreateLicenseVersionRequest withRequest(openapisdk.models.shared.CreateLicenseVersionRequest request) {
        this.request = request;
        return this;
    }
}