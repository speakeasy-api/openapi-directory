package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLicenseUsageRequest {
    public GetLicenseUsageHeaders headers;
    public GetLicenseUsageRequest withHeaders(GetLicenseUsageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetLicenseUsageRequest request;
    public GetLicenseUsageRequest withRequest(openapisdk.models.shared.GetLicenseUsageRequest request) {
        this.request = request;
        return this;
    }
}