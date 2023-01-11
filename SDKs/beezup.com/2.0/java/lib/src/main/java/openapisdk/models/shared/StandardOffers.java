package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StandardOffers {
    @JsonProperty("functionalities")
    public Functionality[] functionalities;
    public StandardOffers withFunctionalities(Functionality[] functionalities) {
        this.functionalities = functionalities;
        return this;
    }
    @JsonProperty("links")
    public StandardOffersLinks links;
    public StandardOffers withLinks(StandardOffersLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("offers")
    public StandardOffer[] offers;
    public StandardOffers withOffers(StandardOffer[] offers) {
        this.offers = offers;
        return this;
    }
}