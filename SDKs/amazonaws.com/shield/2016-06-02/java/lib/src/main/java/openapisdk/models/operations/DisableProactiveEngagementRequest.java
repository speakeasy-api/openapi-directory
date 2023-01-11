package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisableProactiveEngagementRequest {
    public DisableProactiveEngagementHeaders headers;
    public DisableProactiveEngagementRequest withHeaders(DisableProactiveEngagementHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public DisableProactiveEngagementRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}