package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConfirmPaymentOfTransaction5Request {
    public String serverURL;
    public ConfirmPaymentOfTransaction5Request withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public ConfirmPaymentOfTransaction5RequestBody request;
    public ConfirmPaymentOfTransaction5Request withRequest(ConfirmPaymentOfTransaction5RequestBody request) {
        this.request = request;
        return this;
    }
}