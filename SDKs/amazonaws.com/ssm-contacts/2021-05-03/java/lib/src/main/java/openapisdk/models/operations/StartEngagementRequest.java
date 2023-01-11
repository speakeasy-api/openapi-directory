package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartEngagementRequest {
    public StartEngagementHeaders headers;
    public StartEngagementRequest withHeaders(StartEngagementHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartEngagementRequest request;
    public StartEngagementRequest withRequest(openapisdk.models.shared.StartEngagementRequest request) {
        this.request = request;
        return this;
    }
}