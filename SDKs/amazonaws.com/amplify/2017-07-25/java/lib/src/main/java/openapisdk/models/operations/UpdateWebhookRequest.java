package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateWebhookRequest {
    public UpdateWebhookPathParams pathParams;
    public UpdateWebhookRequest withPathParams(UpdateWebhookPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateWebhookHeaders headers;
    public UpdateWebhookRequest withHeaders(UpdateWebhookHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateWebhookRequestBody request;
    public UpdateWebhookRequest withRequest(UpdateWebhookRequestBody request) {
        this.request = request;
        return this;
    }
}