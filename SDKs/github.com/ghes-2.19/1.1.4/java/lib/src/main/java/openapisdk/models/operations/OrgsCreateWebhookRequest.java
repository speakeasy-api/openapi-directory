package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrgsCreateWebhookRequest {
    public OrgsCreateWebhookPathParams pathParams;
    public OrgsCreateWebhookRequest withPathParams(OrgsCreateWebhookPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public OrgsCreateWebhookRequestBody request;
    public OrgsCreateWebhookRequest withRequest(OrgsCreateWebhookRequestBody request) {
        this.request = request;
        return this;
    }
}