package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposUpdateWebhookRequest {
    public ReposUpdateWebhookPathParams pathParams;
    public ReposUpdateWebhookRequest withPathParams(ReposUpdateWebhookPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReposUpdateWebhookRequestBody request;
    public ReposUpdateWebhookRequest withRequest(ReposUpdateWebhookRequestBody request) {
        this.request = request;
        return this;
    }
}