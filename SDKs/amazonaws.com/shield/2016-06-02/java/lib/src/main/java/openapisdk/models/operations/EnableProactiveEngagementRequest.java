package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnableProactiveEngagementRequest {
    public EnableProactiveEngagementHeaders headers;
    public EnableProactiveEngagementRequest withHeaders(EnableProactiveEngagementHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public EnableProactiveEngagementRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}