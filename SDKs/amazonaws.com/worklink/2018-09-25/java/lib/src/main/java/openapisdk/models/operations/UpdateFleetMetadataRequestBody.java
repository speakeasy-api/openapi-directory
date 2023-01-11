package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateFleetMetadataRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DisplayName")
    public String displayName;
    public UpdateFleetMetadataRequestBody withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonProperty("FleetArn")
    public String fleetArn;
    public UpdateFleetMetadataRequestBody withFleetArn(String fleetArn) {
        this.fleetArn = fleetArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OptimizeForEndUserLocation")
    public Boolean optimizeForEndUserLocation;
    public UpdateFleetMetadataRequestBody withOptimizeForEndUserLocation(Boolean optimizeForEndUserLocation) {
        this.optimizeForEndUserLocation = optimizeForEndUserLocation;
        return this;
    }
}