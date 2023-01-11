package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConfirmPaymentOfTransaction3Request {
    public String serverURL;
    public ConfirmPaymentOfTransaction3Request withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public ConfirmPaymentOfTransaction3RequestBody request;
    public ConfirmPaymentOfTransaction3Request withRequest(ConfirmPaymentOfTransaction3RequestBody request) {
        this.request = request;
        return this;
    }
}