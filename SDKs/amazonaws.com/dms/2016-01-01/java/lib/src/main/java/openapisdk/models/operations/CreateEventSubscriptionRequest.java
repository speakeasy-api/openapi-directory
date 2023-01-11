package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateEventSubscriptionRequest {
    public CreateEventSubscriptionHeaders headers;
    public CreateEventSubscriptionRequest withHeaders(CreateEventSubscriptionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateEventSubscriptionMessage request;
    public CreateEventSubscriptionRequest withRequest(openapisdk.models.shared.CreateEventSubscriptionMessage request) {
        this.request = request;
        return this;
    }
}