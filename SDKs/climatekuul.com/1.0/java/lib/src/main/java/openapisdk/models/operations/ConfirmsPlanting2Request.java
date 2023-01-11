package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConfirmsPlanting2Request {
    public String serverURL;
    public ConfirmsPlanting2Request withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public ConfirmsPlanting2RequestBody request;
    public ConfirmsPlanting2Request withRequest(ConfirmsPlanting2RequestBody request) {
        this.request = request;
        return this;
    }
}