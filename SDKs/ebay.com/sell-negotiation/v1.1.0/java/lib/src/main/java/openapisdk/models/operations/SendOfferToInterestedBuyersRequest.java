package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SendOfferToInterestedBuyersRequest {
    public SendOfferToInterestedBuyersHeaders headers;
    public SendOfferToInterestedBuyersRequest withHeaders(SendOfferToInterestedBuyersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateOffersRequest request;
    public SendOfferToInterestedBuyersRequest withRequest(openapisdk.models.shared.CreateOffersRequest request) {
        this.request = request;
        return this;
    }
    public SendOfferToInterestedBuyersSecurity security;
    public SendOfferToInterestedBuyersRequest withSecurity(SendOfferToInterestedBuyersSecurity security) {
        this.security = security;
        return this;
    }
}