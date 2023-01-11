package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateHomeRegionControlResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HomeRegionControl")
    public HomeRegionControl homeRegionControl;
    public CreateHomeRegionControlResult withHomeRegionControl(HomeRegionControl homeRegionControl) {
        this.homeRegionControl = homeRegionControl;
        return this;
    }
}