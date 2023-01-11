package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CheckInLicenseRequest {
    public CheckInLicenseHeaders headers;
    public CheckInLicenseRequest withHeaders(CheckInLicenseHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CheckInLicenseRequest request;
    public CheckInLicenseRequest withRequest(openapisdk.models.shared.CheckInLicenseRequest request) {
        this.request = request;
        return this;
    }
}