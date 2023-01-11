package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActivateSubscriptionRequest {
    public ActivateSubscriptionPathParams pathParams;
    public ActivateSubscriptionRequest withPathParams(ActivateSubscriptionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ActivateSubscriptionRequest request;
    public ActivateSubscriptionRequest withRequest(openapisdk.models.shared.ActivateSubscriptionRequest request) {
        this.request = request;
        return this;
    }
}