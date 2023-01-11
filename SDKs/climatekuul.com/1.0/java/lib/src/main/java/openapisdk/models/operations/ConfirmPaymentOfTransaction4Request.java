package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConfirmPaymentOfTransaction4Request {
    public String serverURL;
    public ConfirmPaymentOfTransaction4Request withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public ConfirmPaymentOfTransaction4RequestBody request;
    public ConfirmPaymentOfTransaction4Request withRequest(ConfirmPaymentOfTransaction4RequestBody request) {
        this.request = request;
        return this;
    }
}