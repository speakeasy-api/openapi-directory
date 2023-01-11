package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrgsUpdateWebhookConfigForOrgRequest {
    public OrgsUpdateWebhookConfigForOrgPathParams pathParams;
    public OrgsUpdateWebhookConfigForOrgRequest withPathParams(OrgsUpdateWebhookConfigForOrgPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public OrgsUpdateWebhookConfigForOrgRequestBody request;
    public OrgsUpdateWebhookConfigForOrgRequest withRequest(OrgsUpdateWebhookConfigForOrgRequestBody request) {
        this.request = request;
        return this;
    }
}