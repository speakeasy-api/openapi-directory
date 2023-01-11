package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateHomeRegionControlRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DryRun")
    public Boolean dryRun;
    public CreateHomeRegionControlRequest withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @JsonProperty("HomeRegion")
    public String homeRegion;
    public CreateHomeRegionControlRequest withHomeRegion(String homeRegion) {
        this.homeRegion = homeRegion;
        return this;
    }
    @JsonProperty("Target")
    public Target target;
    public CreateHomeRegionControlRequest withTarget(Target target) {
        this.target = target;
        return this;
    }
}