package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposUpdateWebhookConfigForRepoRequest {
    public ReposUpdateWebhookConfigForRepoPathParams pathParams;
    public ReposUpdateWebhookConfigForRepoRequest withPathParams(ReposUpdateWebhookConfigForRepoPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReposUpdateWebhookConfigForRepoRequestBody request;
    public ReposUpdateWebhookConfigForRepoRequest withRequest(ReposUpdateWebhookConfigForRepoRequestBody request) {
        this.request = request;
        return this;
    }
}