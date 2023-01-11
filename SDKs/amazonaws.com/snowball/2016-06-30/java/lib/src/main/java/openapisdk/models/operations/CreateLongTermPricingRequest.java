package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateLongTermPricingRequest {
    public CreateLongTermPricingHeaders headers;
    public CreateLongTermPricingRequest withHeaders(CreateLongTermPricingHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateLongTermPricingRequest request;
    public CreateLongTermPricingRequest withRequest(openapisdk.models.shared.CreateLongTermPricingRequest request) {
        this.request = request;
        return this;
    }
}