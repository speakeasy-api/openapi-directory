package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ErrorResponseMessagePaymentRequiredLinks {
    @JsonProperty("offer")
    public LinksGetOfferLink offer;
    public ErrorResponseMessagePaymentRequiredLinks withOffer(LinksGetOfferLink offer) {
        this.offer = offer;
        return this;
    }
}