package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSubscriptionStateRequest {
    public GetSubscriptionStateHeaders headers;
    public GetSubscriptionStateRequest withHeaders(GetSubscriptionStateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public GetSubscriptionStateRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}