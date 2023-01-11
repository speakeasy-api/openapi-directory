package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateContractRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OfferRequest request;
    public CreateContractRequest withRequest(openapisdk.models.shared.OfferRequest request) {
        this.request = request;
        return this;
    }
}