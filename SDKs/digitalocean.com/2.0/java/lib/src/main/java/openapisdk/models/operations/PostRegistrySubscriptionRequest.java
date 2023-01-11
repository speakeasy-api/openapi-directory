package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRegistrySubscriptionRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostRegistrySubscriptionRequestBody request;
    public PostRegistrySubscriptionRequest withRequest(PostRegistrySubscriptionRequestBody request) {
        this.request = request;
        return this;
    }
}