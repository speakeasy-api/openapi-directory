package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConfirmsPlanting4Request {
    public String serverURL;
    public ConfirmsPlanting4Request withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public ConfirmsPlanting4RequestBody request;
    public ConfirmsPlanting4Request withRequest(ConfirmsPlanting4RequestBody request) {
        this.request = request;
        return this;
    }
}