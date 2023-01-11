package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConfirmPaymentOfTransactionRequest {
    public String serverURL;
    public ConfirmPaymentOfTransactionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public ConfirmPaymentOfTransactionRequestBody request;
    public ConfirmPaymentOfTransactionRequest withRequest(ConfirmPaymentOfTransactionRequestBody request) {
        this.request = request;
        return this;
    }
}