package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateFleetRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DisplayName")
    public String displayName;
    public CreateFleetRequestBody withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonProperty("FleetName")
    public String fleetName;
    public CreateFleetRequestBody withFleetName(String fleetName) {
        this.fleetName = fleetName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OptimizeForEndUserLocation")
    public Boolean optimizeForEndUserLocation;
    public CreateFleetRequestBody withOptimizeForEndUserLocation(Boolean optimizeForEndUserLocation) {
        this.optimizeForEndUserLocation = optimizeForEndUserLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public CreateFleetRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}