package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutWebhookRequest {
    public PutWebhookHeaders headers;
    public PutWebhookRequest withHeaders(PutWebhookHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutWebhookInput request;
    public PutWebhookRequest withRequest(openapisdk.models.shared.PutWebhookInput request) {
        this.request = request;
        return this;
    }
}