package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StandardOfferLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("getOffer")
    public LinksGetOfferLink getOffer;
    public StandardOfferLinks withGetOffer(LinksGetOfferLink getOffer) {
        this.getOffer = getOffer;
        return this;
    }
}