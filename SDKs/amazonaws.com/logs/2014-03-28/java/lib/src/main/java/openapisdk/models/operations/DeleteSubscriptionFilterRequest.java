package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSubscriptionFilterRequest {
    public DeleteSubscriptionFilterHeaders headers;
    public DeleteSubscriptionFilterRequest withHeaders(DeleteSubscriptionFilterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteSubscriptionFilterRequest request;
    public DeleteSubscriptionFilterRequest withRequest(openapisdk.models.shared.DeleteSubscriptionFilterRequest request) {
        this.request = request;
        return this;
    }
}