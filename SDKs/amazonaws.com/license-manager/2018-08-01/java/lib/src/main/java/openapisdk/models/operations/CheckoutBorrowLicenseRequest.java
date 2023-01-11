package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CheckoutBorrowLicenseRequest {
    public CheckoutBorrowLicenseHeaders headers;
    public CheckoutBorrowLicenseRequest withHeaders(CheckoutBorrowLicenseHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CheckoutBorrowLicenseRequest request;
    public CheckoutBorrowLicenseRequest withRequest(openapisdk.models.shared.CheckoutBorrowLicenseRequest request) {
        this.request = request;
        return this;
    }
}