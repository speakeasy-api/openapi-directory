package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RegionsInfo
 * Provides information about the Regions that are configured for multi-Region replication.
**/
public class RegionsInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AdditionalRegions")
    public String[] additionalRegions;
    public RegionsInfo withAdditionalRegions(String[] additionalRegions) {
        this.additionalRegions = additionalRegions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PrimaryRegion")
    public String primaryRegion;
    public RegionsInfo withPrimaryRegion(String primaryRegion) {
        this.primaryRegion = primaryRegion;
        return this;
    }
}