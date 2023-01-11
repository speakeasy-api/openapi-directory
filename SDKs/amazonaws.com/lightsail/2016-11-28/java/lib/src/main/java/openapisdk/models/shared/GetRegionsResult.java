package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetRegionsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regions")
    public Region[] regions;
    public GetRegionsResult withRegions(Region[] regions) {
        this.regions = regions;
        return this;
    }
}