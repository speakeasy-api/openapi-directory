package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostWebhooksIdRequest {
    public PostWebhooksIdPathParams pathParams;
    public PostWebhooksIdRequest withPathParams(PostWebhooksIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WebhookEntry request;
    public PostWebhooksIdRequest withRequest(openapisdk.models.shared.WebhookEntry request) {
        this.request = request;
        return this;
    }
}