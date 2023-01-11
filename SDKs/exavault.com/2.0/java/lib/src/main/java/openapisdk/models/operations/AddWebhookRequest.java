package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddWebhookRequest {
    public AddWebhookHeaders headers;
    public AddWebhookRequest withHeaders(AddWebhookHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddWebhookAddWebhookRequestBody request;
    public AddWebhookRequest withRequest(AddWebhookAddWebhookRequestBody request) {
        this.request = request;
        return this;
    }
}