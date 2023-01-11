package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostWebhooksRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WebhookEntry request;
    public PostWebhooksRequest withRequest(openapisdk.models.shared.WebhookEntry request) {
        this.request = request;
        return this;
    }
    public PostWebhooksSecurity security;
    public PostWebhooksRequest withSecurity(PostWebhooksSecurity security) {
        this.security = security;
        return this;
    }
}