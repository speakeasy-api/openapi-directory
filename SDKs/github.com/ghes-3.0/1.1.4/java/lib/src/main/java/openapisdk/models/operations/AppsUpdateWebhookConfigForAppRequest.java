package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppsUpdateWebhookConfigForAppRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AppsUpdateWebhookConfigForAppRequestBody request;
    public AppsUpdateWebhookConfigForAppRequest withRequest(AppsUpdateWebhookConfigForAppRequestBody request) {
        this.request = request;
        return this;
    }
}