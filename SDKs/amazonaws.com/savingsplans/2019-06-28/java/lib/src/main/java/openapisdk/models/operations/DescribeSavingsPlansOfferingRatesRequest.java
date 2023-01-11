package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeSavingsPlansOfferingRatesRequest {
    public DescribeSavingsPlansOfferingRatesHeaders headers;
    public DescribeSavingsPlansOfferingRatesRequest withHeaders(DescribeSavingsPlansOfferingRatesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DescribeSavingsPlansOfferingRatesRequestBody request;
    public DescribeSavingsPlansOfferingRatesRequest withRequest(DescribeSavingsPlansOfferingRatesRequestBody request) {
        this.request = request;
        return this;
    }
}