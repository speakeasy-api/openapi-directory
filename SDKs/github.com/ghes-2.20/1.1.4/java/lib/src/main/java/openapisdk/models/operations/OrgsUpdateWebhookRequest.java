package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrgsUpdateWebhookRequest {
    public OrgsUpdateWebhookPathParams pathParams;
    public OrgsUpdateWebhookRequest withPathParams(OrgsUpdateWebhookPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public OrgsUpdateWebhookRequestBody request;
    public OrgsUpdateWebhookRequest withRequest(OrgsUpdateWebhookRequestBody request) {
        this.request = request;
        return this;
    }
}