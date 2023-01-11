package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateLicenseRequest {
    public CreateLicenseHeaders headers;
    public CreateLicenseRequest withHeaders(CreateLicenseHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateLicenseRequest request;
    public CreateLicenseRequest withRequest(openapisdk.models.shared.CreateLicenseRequest request) {
        this.request = request;
        return this;
    }
}