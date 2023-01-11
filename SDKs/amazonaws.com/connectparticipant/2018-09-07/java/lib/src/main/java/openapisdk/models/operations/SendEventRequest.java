package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SendEventRequest {
    public SendEventHeaders headers;
    public SendEventRequest withHeaders(SendEventHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SendEventRequestBody request;
    public SendEventRequest withRequest(SendEventRequestBody request) {
        this.request = request;
        return this;
    }
}