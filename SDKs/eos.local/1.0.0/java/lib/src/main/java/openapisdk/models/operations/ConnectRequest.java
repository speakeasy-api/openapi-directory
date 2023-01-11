package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConnectRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ConnectRequestBody request;
    public ConnectRequest withRequest(ConnectRequestBody request) {
        this.request = request;
        return this;
    }
}