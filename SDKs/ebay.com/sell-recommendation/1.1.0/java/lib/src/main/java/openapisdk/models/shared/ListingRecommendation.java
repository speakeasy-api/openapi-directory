package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListingRecommendation
 * A complex type that contains the ID of an actively listed item and a set of related listing recommendations. The recommendations contain information the seller can use to optimize their listing configurations.
**/
public class ListingRecommendation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listingId")
    public String listingId;
    public ListingRecommendation withListingId(String listingId) {
        this.listingId = listingId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marketing")
    public MarketingRecommendation marketing;
    public ListingRecommendation withMarketing(MarketingRecommendation marketing) {
        this.marketing = marketing;
        return this;
    }
}