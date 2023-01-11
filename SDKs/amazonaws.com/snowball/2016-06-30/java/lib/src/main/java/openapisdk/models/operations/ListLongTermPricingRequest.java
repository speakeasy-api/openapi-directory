package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListLongTermPricingRequest {
    public ListLongTermPricingHeaders headers;
    public ListLongTermPricingRequest withHeaders(ListLongTermPricingHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListLongTermPricingRequest request;
    public ListLongTermPricingRequest withRequest(openapisdk.models.shared.ListLongTermPricingRequest request) {
        this.request = request;
        return this;
    }
}