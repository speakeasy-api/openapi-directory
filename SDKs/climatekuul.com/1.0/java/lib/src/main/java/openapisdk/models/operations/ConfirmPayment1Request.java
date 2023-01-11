package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConfirmPayment1Request {
    public String serverURL;
    public ConfirmPayment1Request withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public ConfirmPayment1RequestBody request;
    public ConfirmPayment1Request withRequest(ConfirmPayment1RequestBody request) {
        this.request = request;
        return this;
    }
}