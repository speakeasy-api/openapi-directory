package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostBehaviorsWebhookTestRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostBehaviorsWebhookTestRequestBody request;
    public PostBehaviorsWebhookTestRequest withRequest(PostBehaviorsWebhookTestRequestBody request) {
        this.request = request;
        return this;
    }
}