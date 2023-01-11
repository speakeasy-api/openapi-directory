package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConfirmPaymentRequest {
    public String serverURL;
    public ConfirmPaymentRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public ConfirmPaymentRequestBody request;
    public ConfirmPaymentRequest withRequest(ConfirmPaymentRequestBody request) {
        this.request = request;
        return this;
    }
}