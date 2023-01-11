package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SubscribeRequest {
    public SubscribeHeaders headers;
    public SubscribeRequest withHeaders(SubscribeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SubscribeRequestBody request;
    public SubscribeRequest withRequest(SubscribeRequestBody request) {
        this.request = request;
        return this;
    }
}