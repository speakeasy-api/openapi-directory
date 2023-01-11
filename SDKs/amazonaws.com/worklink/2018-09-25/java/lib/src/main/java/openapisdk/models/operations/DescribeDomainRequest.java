package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeDomainRequest {
    public DescribeDomainHeaders headers;
    public DescribeDomainRequest withHeaders(DescribeDomainHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DescribeDomainRequestBody request;
    public DescribeDomainRequest withRequest(DescribeDomainRequestBody request) {
        this.request = request;
        return this;
    }
}