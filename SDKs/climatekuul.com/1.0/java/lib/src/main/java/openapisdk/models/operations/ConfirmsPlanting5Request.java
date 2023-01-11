package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConfirmsPlanting5Request {
    public String serverURL;
    public ConfirmsPlanting5Request withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public ConfirmsPlanting5RequestBody request;
    public ConfirmsPlanting5Request withRequest(ConfirmsPlanting5RequestBody request) {
        this.request = request;
        return this;
    }
}