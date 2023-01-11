package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSubscriptionRequest {
    public CreateSubscriptionHeaders headers;
    public CreateSubscriptionRequest withHeaders(CreateSubscriptionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public CreateSubscriptionRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}