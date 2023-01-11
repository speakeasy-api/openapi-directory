package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopEngagementRequest {
    public StopEngagementHeaders headers;
    public StopEngagementRequest withHeaders(StopEngagementHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopEngagementRequest request;
    public StopEngagementRequest withRequest(openapisdk.models.shared.StopEngagementRequest request) {
        this.request = request;
        return this;
    }
}