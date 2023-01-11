package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConfirmCarbonOffset1Request {
    public String serverURL;
    public ConfirmCarbonOffset1Request withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public ConfirmCarbonOffset1RequestBody request;
    public ConfirmCarbonOffset1Request withRequest(ConfirmCarbonOffset1RequestBody request) {
        this.request = request;
        return this;
    }
}