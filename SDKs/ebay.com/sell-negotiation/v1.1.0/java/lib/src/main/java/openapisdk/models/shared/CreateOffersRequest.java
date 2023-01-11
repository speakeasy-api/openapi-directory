package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateOffersRequest
 * This complex type contains the fields needed to create an offer to a buyer that is initiated by the seller.
**/
public class CreateOffersRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowCounterOffer")
    public Boolean allowCounterOffer;
    public CreateOffersRequest withAllowCounterOffer(Boolean allowCounterOffer) {
        this.allowCounterOffer = allowCounterOffer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public CreateOffersRequest withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offerDuration")
    public TimeDuration offerDuration;
    public CreateOffersRequest withOfferDuration(TimeDuration offerDuration) {
        this.offerDuration = offerDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offeredItems")
    public OfferedItem[] offeredItems;
    public CreateOffersRequest withOfferedItems(OfferedItem[] offeredItems) {
        this.offeredItems = offeredItems;
        return this;
    }
}