package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActivitySetRepoSubscriptionRequest {
    public ActivitySetRepoSubscriptionPathParams pathParams;
    public ActivitySetRepoSubscriptionRequest withPathParams(ActivitySetRepoSubscriptionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ActivitySetRepoSubscriptionRequestBody request;
    public ActivitySetRepoSubscriptionRequest withRequest(ActivitySetRepoSubscriptionRequestBody request) {
        this.request = request;
        return this;
    }
}