package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisconnectRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DisconnectRequestBody request;
    public DisconnectRequest withRequest(DisconnectRequestBody request) {
        this.request = request;
        return this;
    }
}