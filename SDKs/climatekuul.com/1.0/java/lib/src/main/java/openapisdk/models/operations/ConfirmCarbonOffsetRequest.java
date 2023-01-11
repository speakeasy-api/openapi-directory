package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConfirmCarbonOffsetRequest {
    public String serverURL;
    public ConfirmCarbonOffsetRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public ConfirmCarbonOffsetRequestBody request;
    public ConfirmCarbonOffsetRequest withRequest(ConfirmCarbonOffsetRequestBody request) {
        this.request = request;
        return this;
    }
}