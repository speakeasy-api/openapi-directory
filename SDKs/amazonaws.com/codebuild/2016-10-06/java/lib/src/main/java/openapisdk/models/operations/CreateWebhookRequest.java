package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateWebhookRequest {
    public CreateWebhookHeaders headers;
    public CreateWebhookRequest withHeaders(CreateWebhookHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateWebhookInput request;
    public CreateWebhookRequest withRequest(openapisdk.models.shared.CreateWebhookInput request) {
        this.request = request;
        return this;
    }
}