package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConfirmsPlanting3Request {
    public String serverURL;
    public ConfirmsPlanting3Request withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public ConfirmsPlanting3RequestBody request;
    public ConfirmsPlanting3Request withRequest(ConfirmsPlanting3RequestBody request) {
        this.request = request;
        return this;
    }
}