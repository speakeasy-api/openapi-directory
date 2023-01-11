package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CarListingRank
 * Ranking query response
**/
public class CarListingRank {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ranked_listing")
    public java.util.Map<String, Object> rankedListing;
    public CarListingRank withRankedListing(java.util.Map<String, Object> rankedListing) {
        this.rankedListing = rankedListing;
        return this;
    }
}