package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConfirmPayment4Request {
    public String serverURL;
    public ConfirmPayment4Request withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public ConfirmPayment4RequestBody request;
    public ConfirmPayment4Request withRequest(ConfirmPayment4RequestBody request) {
        this.request = request;
        return this;
    }
}