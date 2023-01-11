package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeleteAdRequest
 * This type defines the fields used in a delete-ad request.
**/
public class DeleteAdRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listingId")
    public String listingId;
    public DeleteAdRequest withListingId(String listingId) {
        this.listingId = listingId;
        return this;
    }
}