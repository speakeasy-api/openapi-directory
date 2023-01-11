package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSiteTestWebhookRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostSiteTestWebhookRequestBody request;
    public PostSiteTestWebhookRequest withRequest(PostSiteTestWebhookRequestBody request) {
        this.request = request;
        return this;
    }
}