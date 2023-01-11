package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConfirmsPlantingRequest {
    public String serverURL;
    public ConfirmsPlantingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public ConfirmsPlantingRequestBody request;
    public ConfirmsPlantingRequest withRequest(ConfirmsPlantingRequestBody request) {
        this.request = request;
        return this;
    }
}