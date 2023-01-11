package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConfirmPayment3Request {
    public String serverURL;
    public ConfirmPayment3Request withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public ConfirmPayment3RequestBody request;
    public ConfirmPayment3Request withRequest(ConfirmPayment3RequestBody request) {
        this.request = request;
        return this;
    }
}