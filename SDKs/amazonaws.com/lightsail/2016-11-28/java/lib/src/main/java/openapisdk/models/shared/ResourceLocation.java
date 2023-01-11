package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResourceLocation
 * Describes the resource location.
**/
public class ResourceLocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availabilityZone")
    public String availabilityZone;
    public ResourceLocation withAvailabilityZone(String availabilityZone) {
        this.availabilityZone = availabilityZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regionName")
    public RegionNameEnum regionName;
    public ResourceLocation withRegionName(RegionNameEnum regionName) {
        this.regionName = regionName;
        return this;
    }
}