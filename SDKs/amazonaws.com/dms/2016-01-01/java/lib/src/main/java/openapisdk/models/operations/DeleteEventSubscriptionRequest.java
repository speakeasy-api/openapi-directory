package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteEventSubscriptionRequest {
    public DeleteEventSubscriptionHeaders headers;
    public DeleteEventSubscriptionRequest withHeaders(DeleteEventSubscriptionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteEventSubscriptionMessage request;
    public DeleteEventSubscriptionRequest withRequest(openapisdk.models.shared.DeleteEventSubscriptionMessage request) {
        this.request = request;
        return this;
    }
}