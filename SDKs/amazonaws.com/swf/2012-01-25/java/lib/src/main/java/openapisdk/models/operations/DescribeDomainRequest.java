package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeDomainRequest {
    public DescribeDomainHeaders headers;
    public DescribeDomainRequest withHeaders(DescribeDomainHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeDomainInput request;
    public DescribeDomainRequest withRequest(openapisdk.models.shared.DescribeDomainInput request) {
        this.request = request;
        return this;
    }
}