package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostWebhookTestsRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostWebhookTestsRequestBody request;
    public PostWebhookTestsRequest withRequest(PostWebhookTestsRequestBody request) {
        this.request = request;
        return this;
    }
}