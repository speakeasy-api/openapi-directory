package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConfirmPayment5Request {
    public String serverURL;
    public ConfirmPayment5Request withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public ConfirmPayment5RequestBody request;
    public ConfirmPayment5Request withRequest(ConfirmPayment5RequestBody request) {
        this.request = request;
        return this;
    }
}