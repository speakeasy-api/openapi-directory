package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConfirmPaymentOfTransaction1Request {
    public String serverURL;
    public ConfirmPaymentOfTransaction1Request withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public ConfirmPaymentOfTransaction1RequestBody request;
    public ConfirmPaymentOfTransaction1Request withRequest(ConfirmPaymentOfTransaction1RequestBody request) {
        this.request = request;
        return this;
    }
}