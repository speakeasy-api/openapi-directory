package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetHomeRegionRequest {
    public GetHomeRegionHeaders headers;
    public GetHomeRegionRequest withHeaders(GetHomeRegionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public GetHomeRegionRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}