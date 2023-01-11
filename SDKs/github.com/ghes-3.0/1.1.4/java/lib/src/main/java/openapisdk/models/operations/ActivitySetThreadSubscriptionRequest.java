package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActivitySetThreadSubscriptionRequest {
    public ActivitySetThreadSubscriptionPathParams pathParams;
    public ActivitySetThreadSubscriptionRequest withPathParams(ActivitySetThreadSubscriptionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ActivitySetThreadSubscriptionRequestBody request;
    public ActivitySetThreadSubscriptionRequest withRequest(ActivitySetThreadSubscriptionRequestBody request) {
        this.request = request;
        return this;
    }
}