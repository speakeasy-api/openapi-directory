package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConfirmCarbonOffset4Request {
    public String serverURL;
    public ConfirmCarbonOffset4Request withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public ConfirmCarbonOffset4RequestBody request;
    public ConfirmCarbonOffset4Request withRequest(ConfirmCarbonOffset4RequestBody request) {
        this.request = request;
        return this;
    }
}