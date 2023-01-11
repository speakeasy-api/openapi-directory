package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateWebhookRequest {
    public CreateWebhookQueryParams queryParams;
    public CreateWebhookRequest withQueryParams(CreateWebhookQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateWebhookRequestBody request;
    public CreateWebhookRequest withRequest(CreateWebhookRequestBody request) {
        this.request = request;
        return this;
    }
}