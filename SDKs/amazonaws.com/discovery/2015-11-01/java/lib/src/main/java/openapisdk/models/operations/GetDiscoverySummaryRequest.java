package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDiscoverySummaryRequest {
    public GetDiscoverySummaryHeaders headers;
    public GetDiscoverySummaryRequest withHeaders(GetDiscoverySummaryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public GetDiscoverySummaryRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}