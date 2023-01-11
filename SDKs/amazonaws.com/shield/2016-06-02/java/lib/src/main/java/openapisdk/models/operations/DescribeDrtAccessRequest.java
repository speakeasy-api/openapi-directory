package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeDrtAccessRequest {
    public DescribeDrtAccessHeaders headers;
    public DescribeDrtAccessRequest withHeaders(DescribeDrtAccessHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public DescribeDrtAccessRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}