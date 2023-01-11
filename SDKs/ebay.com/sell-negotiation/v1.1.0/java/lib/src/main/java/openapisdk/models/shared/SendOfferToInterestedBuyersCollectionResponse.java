package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SendOfferToInterestedBuyersCollectionResponse
 * The response object returned from a SendOfferToInterestedBuyers request.
**/
public class SendOfferToInterestedBuyersCollectionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offers")
    public Offer[] offers;
    public SendOfferToInterestedBuyersCollectionResponse withOffers(Offer[] offers) {
        this.offers = offers;
        return this;
    }
}