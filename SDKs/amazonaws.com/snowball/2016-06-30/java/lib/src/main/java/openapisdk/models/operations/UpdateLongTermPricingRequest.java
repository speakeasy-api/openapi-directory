package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateLongTermPricingRequest {
    public UpdateLongTermPricingHeaders headers;
    public UpdateLongTermPricingRequest withHeaders(UpdateLongTermPricingHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateLongTermPricingRequest request;
    public UpdateLongTermPricingRequest withRequest(openapisdk.models.shared.UpdateLongTermPricingRequest request) {
        this.request = request;
        return this;
    }
}