package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Ad
 * A complex type that contains recommendations and information on how to configure Promoted Listings ad campaigns.
**/
public class Ad {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bidPercentages")
    public BidPercentages[] bidPercentages;
    public Ad withBidPercentages(BidPercentages[] bidPercentages) {
        this.bidPercentages = bidPercentages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promoteWithAd")
    public String promoteWithAd;
    public Ad withPromoteWithAd(String promoteWithAd) {
        this.promoteWithAd = promoteWithAd;
        return this;
    }
}