package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeSavingsPlanRatesRequest {
    public DescribeSavingsPlanRatesHeaders headers;
    public DescribeSavingsPlanRatesRequest withHeaders(DescribeSavingsPlanRatesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DescribeSavingsPlanRatesRequestBody request;
    public DescribeSavingsPlanRatesRequest withRequest(DescribeSavingsPlanRatesRequestBody request) {
        this.request = request;
        return this;
    }
}