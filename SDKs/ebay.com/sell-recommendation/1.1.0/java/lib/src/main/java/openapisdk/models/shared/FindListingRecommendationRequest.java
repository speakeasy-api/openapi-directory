package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FindListingRecommendationRequest
 * An list of listing ID values for which you want Promoted Listings ad configuration information.
**/
public class FindListingRecommendationRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listingIds")
    public String[] listingIds;
    public FindListingRecommendationRequest withListingIds(String[] listingIds) {
        this.listingIds = listingIds;
        return this;
    }
}