package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeLimitsRequest {
    public DescribeLimitsHeaders headers;
    public DescribeLimitsRequest withHeaders(DescribeLimitsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public DescribeLimitsRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}