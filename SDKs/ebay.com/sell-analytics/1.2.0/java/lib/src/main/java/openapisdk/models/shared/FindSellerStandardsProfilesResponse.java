package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FindSellerStandardsProfilesResponse
 * The response container for a list of seller profiles.
**/
public class FindSellerStandardsProfilesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("standardsProfiles")
    public StandardsProfile[] standardsProfiles;
    public FindSellerStandardsProfilesResponse withStandardsProfiles(StandardsProfile[] standardsProfiles) {
        this.standardsProfiles = standardsProfiles;
        return this;
    }
}