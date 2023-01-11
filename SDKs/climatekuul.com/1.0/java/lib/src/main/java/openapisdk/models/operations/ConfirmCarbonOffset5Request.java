package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConfirmCarbonOffset5Request {
    public String serverURL;
    public ConfirmCarbonOffset5Request withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public ConfirmCarbonOffset5RequestBody request;
    public ConfirmCarbonOffset5Request withRequest(ConfirmCarbonOffset5RequestBody request) {
        this.request = request;
        return this;
    }
}