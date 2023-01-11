package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeDomainControllersRequest {
    public DescribeDomainControllersQueryParams queryParams;
    public DescribeDomainControllersRequest withQueryParams(DescribeDomainControllersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeDomainControllersHeaders headers;
    public DescribeDomainControllersRequest withHeaders(DescribeDomainControllersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeDomainControllersRequest request;
    public DescribeDomainControllersRequest withRequest(openapisdk.models.shared.DescribeDomainControllersRequest request) {
        this.request = request;
        return this;
    }
}