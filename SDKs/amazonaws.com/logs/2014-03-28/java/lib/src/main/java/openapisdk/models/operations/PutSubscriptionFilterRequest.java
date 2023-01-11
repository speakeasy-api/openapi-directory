package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSubscriptionFilterRequest {
    public PutSubscriptionFilterHeaders headers;
    public PutSubscriptionFilterRequest withHeaders(PutSubscriptionFilterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutSubscriptionFilterRequest request;
    public PutSubscriptionFilterRequest withRequest(openapisdk.models.shared.PutSubscriptionFilterRequest request) {
        this.request = request;
        return this;
    }
}