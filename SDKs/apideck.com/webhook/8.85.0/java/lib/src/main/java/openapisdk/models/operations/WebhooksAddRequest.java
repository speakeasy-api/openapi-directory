package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebhooksAddRequest {
    public WebhooksAddHeaders headers;
    public WebhooksAddRequest withHeaders(WebhooksAddHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateWebhookRequest request;
    public WebhooksAddRequest withRequest(openapisdk.models.shared.CreateWebhookRequest request) {
        this.request = request;
        return this;
    }
    public WebhooksAddSecurity security;
    public WebhooksAddRequest withSecurity(WebhooksAddSecurity security) {
        this.security = security;
        return this;
    }
}