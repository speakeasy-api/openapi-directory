package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateWebhookRequest {
    public UpdateWebhookHeaders headers;
    public UpdateWebhookRequest withHeaders(UpdateWebhookHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateWebhookInput request;
    public UpdateWebhookRequest withRequest(openapisdk.models.shared.UpdateWebhookInput request) {
        this.request = request;
        return this;
    }
}