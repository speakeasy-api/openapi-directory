package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebhooksUpdateRequest {
    public WebhooksUpdatePathParams pathParams;
    public WebhooksUpdateRequest withPathParams(WebhooksUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public WebhooksUpdateHeaders headers;
    public WebhooksUpdateRequest withHeaders(WebhooksUpdateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateWebhookRequest request;
    public WebhooksUpdateRequest withRequest(openapisdk.models.shared.UpdateWebhookRequest request) {
        this.request = request;
        return this;
    }
    public WebhooksUpdateSecurity security;
    public WebhooksUpdateRequest withSecurity(WebhooksUpdateSecurity security) {
        this.security = security;
        return this;
    }
}