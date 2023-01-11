package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateAdRequest
 * This type defines the fields for the create ad request.
**/
public class CreateAdRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bidPercentage")
    public String bidPercentage;
    public CreateAdRequest withBidPercentage(String bidPercentage) {
        this.bidPercentage = bidPercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listingId")
    public String listingId;
    public CreateAdRequest withListingId(String listingId) {
        this.listingId = listingId;
        return this;
    }
}