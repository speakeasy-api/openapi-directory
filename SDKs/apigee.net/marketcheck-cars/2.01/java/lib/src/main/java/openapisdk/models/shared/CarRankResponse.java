package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CarRankResponse
 * Ranking query response
**/
public class CarRankResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("num_ranked")
    public Long numRanked;
    public CarRankResponse withNumRanked(Long numRanked) {
        this.numRanked = numRanked;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ranked_listings")
    public CarListingRank[] rankedListings;
    public CarRankResponse withRankedListings(CarListingRank[] rankedListings) {
        this.rankedListings = rankedListings;
        return this;
    }
}