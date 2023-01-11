package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UrbanDeliveryRequest {
    public String serverURL;
    public UrbanDeliveryRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UrbanDeliveryRequestBody request;
    public UrbanDeliveryRequest withRequest(UrbanDeliveryRequestBody request) {
        this.request = request;
        return this;
    }
}