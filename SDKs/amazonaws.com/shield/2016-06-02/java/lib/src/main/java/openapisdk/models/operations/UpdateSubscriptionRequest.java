package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSubscriptionRequest {
    public UpdateSubscriptionHeaders headers;
    public UpdateSubscriptionRequest withHeaders(UpdateSubscriptionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateSubscriptionRequest request;
    public UpdateSubscriptionRequest withRequest(openapisdk.models.shared.UpdateSubscriptionRequest request) {
        this.request = request;
        return this;
    }
}