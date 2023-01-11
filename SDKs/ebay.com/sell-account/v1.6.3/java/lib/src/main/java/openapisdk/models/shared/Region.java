package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Region
 * This type defines information for a region.
**/
public class Region {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regionName")
    public String regionName;
    public Region withRegionName(String regionName) {
        this.regionName = regionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regionType")
    public String regionType;
    public Region withRegionType(String regionType) {
        this.regionType = regionType;
        return this;
    }
}