package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLicenseRequest {
    public GetLicenseHeaders headers;
    public GetLicenseRequest withHeaders(GetLicenseHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetLicenseRequest request;
    public GetLicenseRequest withRequest(openapisdk.models.shared.GetLicenseRequest request) {
        this.request = request;
        return this;
    }
}