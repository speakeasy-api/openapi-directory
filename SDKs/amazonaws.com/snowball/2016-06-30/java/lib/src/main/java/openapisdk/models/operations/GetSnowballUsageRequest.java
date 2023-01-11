package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSnowballUsageRequest {
    public GetSnowballUsageHeaders headers;
    public GetSnowballUsageRequest withHeaders(GetSnowballUsageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public GetSnowballUsageRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}