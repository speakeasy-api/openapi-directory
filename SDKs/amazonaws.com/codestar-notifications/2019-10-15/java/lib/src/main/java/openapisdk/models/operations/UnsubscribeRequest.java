package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UnsubscribeRequest {
    public UnsubscribeHeaders headers;
    public UnsubscribeRequest withHeaders(UnsubscribeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UnsubscribeRequestBody request;
    public UnsubscribeRequest withRequest(UnsubscribeRequestBody request) {
        this.request = request;
        return this;
    }
}