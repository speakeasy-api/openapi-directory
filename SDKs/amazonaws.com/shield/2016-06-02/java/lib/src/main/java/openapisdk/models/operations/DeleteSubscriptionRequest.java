package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSubscriptionRequest {
    public DeleteSubscriptionHeaders headers;
    public DeleteSubscriptionRequest withHeaders(DeleteSubscriptionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public DeleteSubscriptionRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}