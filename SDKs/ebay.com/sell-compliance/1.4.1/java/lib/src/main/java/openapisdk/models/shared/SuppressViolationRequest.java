package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SuppressViolationRequest
 * This is the base request type of the suppressViolation method, and is used to identify the listing violation that the seller wishes to suppress.
**/
public class SuppressViolationRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("complianceType")
    public String complianceType;
    public SuppressViolationRequest withComplianceType(String complianceType) {
        this.complianceType = complianceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listingId")
    public String listingId;
    public SuppressViolationRequest withListingId(String listingId) {
        this.listingId = listingId;
        return this;
    }
}