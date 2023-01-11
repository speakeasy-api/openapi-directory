package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateLogSubscriptionRequest {
    public CreateLogSubscriptionHeaders headers;
    public CreateLogSubscriptionRequest withHeaders(CreateLogSubscriptionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateLogSubscriptionRequest request;
    public CreateLogSubscriptionRequest withRequest(openapisdk.models.shared.CreateLogSubscriptionRequest request) {
        this.request = request;
        return this;
    }
}