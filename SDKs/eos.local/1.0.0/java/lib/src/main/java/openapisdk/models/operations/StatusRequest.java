package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StatusRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public StatusRequestBody request;
    public StatusRequest withRequest(StatusRequestBody request) {
        this.request = request;
        return this;
    }
}