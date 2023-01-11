package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSubscriptionRequest {
    public CreateSubscriptionPathParams pathParams;
    public CreateSubscriptionRequest withPathParams(CreateSubscriptionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateSubscriptionRequest request;
    public CreateSubscriptionRequest withRequest(openapisdk.models.shared.CreateSubscriptionRequest request) {
        this.request = request;
        return this;
    }
}