package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Ad
 * This type defines the fields for an ad.
**/
public class Ad {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adId")
    public String adId;
    public Ad withAdId(String adId) {
        this.adId = adId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bidPercentage")
    public String bidPercentage;
    public Ad withBidPercentage(String bidPercentage) {
        this.bidPercentage = bidPercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventoryReferenceId")
    public String inventoryReferenceId;
    public Ad withInventoryReferenceId(String inventoryReferenceId) {
        this.inventoryReferenceId = inventoryReferenceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventoryReferenceType")
    public String inventoryReferenceType;
    public Ad withInventoryReferenceType(String inventoryReferenceType) {
        this.inventoryReferenceType = inventoryReferenceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listingId")
    public String listingId;
    public Ad withListingId(String listingId) {
        this.listingId = listingId;
        return this;
    }
}