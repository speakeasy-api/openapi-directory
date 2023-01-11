package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConfirmCarbonOffset3Request {
    public String serverURL;
    public ConfirmCarbonOffset3Request withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public ConfirmCarbonOffset3RequestBody request;
    public ConfirmCarbonOffset3Request withRequest(ConfirmCarbonOffset3RequestBody request) {
        this.request = request;
        return this;
    }
}