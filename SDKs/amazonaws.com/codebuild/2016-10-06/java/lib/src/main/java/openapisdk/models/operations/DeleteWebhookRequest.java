package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteWebhookRequest {
    public DeleteWebhookHeaders headers;
    public DeleteWebhookRequest withHeaders(DeleteWebhookHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteWebhookInput request;
    public DeleteWebhookRequest withRequest(openapisdk.models.shared.DeleteWebhookInput request) {
        this.request = request;
        return this;
    }
}