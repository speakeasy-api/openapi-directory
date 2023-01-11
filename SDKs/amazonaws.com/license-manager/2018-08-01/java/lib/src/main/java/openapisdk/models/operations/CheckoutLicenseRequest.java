package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CheckoutLicenseRequest {
    public CheckoutLicenseHeaders headers;
    public CheckoutLicenseRequest withHeaders(CheckoutLicenseHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CheckoutLicenseRequest request;
    public CheckoutLicenseRequest withRequest(openapisdk.models.shared.CheckoutLicenseRequest request) {
        this.request = request;
        return this;
    }
}