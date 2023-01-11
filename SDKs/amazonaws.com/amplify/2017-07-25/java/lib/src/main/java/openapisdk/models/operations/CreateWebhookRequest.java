package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateWebhookRequest {
    public CreateWebhookPathParams pathParams;
    public CreateWebhookRequest withPathParams(CreateWebhookPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateWebhookHeaders headers;
    public CreateWebhookRequest withHeaders(CreateWebhookHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateWebhookRequestBody request;
    public CreateWebhookRequest withRequest(CreateWebhookRequestBody request) {
        this.request = request;
        return this;
    }
}