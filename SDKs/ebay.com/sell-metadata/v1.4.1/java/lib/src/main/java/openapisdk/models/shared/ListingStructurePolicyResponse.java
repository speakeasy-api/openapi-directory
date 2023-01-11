package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListingStructurePolicyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listingStructurePolicies")
    public ListingStructurePolicy[] listingStructurePolicies;
    public ListingStructurePolicyResponse withListingStructurePolicies(ListingStructurePolicy[] listingStructurePolicies) {
        this.listingStructurePolicies = listingStructurePolicies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warnings")
    public Error[] warnings;
    public ListingStructurePolicyResponse withWarnings(Error[] warnings) {
        this.warnings = warnings;
        return this;
    }
}