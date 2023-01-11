package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteLogSubscriptionRequest {
    public DeleteLogSubscriptionHeaders headers;
    public DeleteLogSubscriptionRequest withHeaders(DeleteLogSubscriptionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteLogSubscriptionRequest request;
    public DeleteLogSubscriptionRequest withRequest(openapisdk.models.shared.DeleteLogSubscriptionRequest request) {
        this.request = request;
        return this;
    }
}