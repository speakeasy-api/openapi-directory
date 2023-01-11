package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOfferRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OfferRequest request;
    public GetOfferRequest withRequest(openapisdk.models.shared.OfferRequest request) {
        this.request = request;
        return this;
    }
}