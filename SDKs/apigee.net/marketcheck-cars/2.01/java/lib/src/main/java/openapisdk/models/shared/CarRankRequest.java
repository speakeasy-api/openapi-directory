package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CarRankRequest
 * Ranking query request
**/
public class CarRankRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listing_ids")
    public String[] listingIds;
    public CarRankRequest withListingIds(String[] listingIds) {
        this.listingIds = listingIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ranking_criteria")
    public java.util.Map<String, Object> rankingCriteria;
    public CarRankRequest withRankingCriteria(java.util.Map<String, Object> rankingCriteria) {
        this.rankingCriteria = rankingCriteria;
        return this;
    }
}