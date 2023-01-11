package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SendMessageRequest {
    public SendMessageHeaders headers;
    public SendMessageRequest withHeaders(SendMessageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SendMessageRequestBody request;
    public SendMessageRequest withRequest(SendMessageRequestBody request) {
        this.request = request;
        return this;
    }
}