package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetHomeRegionResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HomeRegion")
    public String homeRegion;
    public GetHomeRegionResult withHomeRegion(String homeRegion) {
        this.homeRegion = homeRegion;
        return this;
    }
}