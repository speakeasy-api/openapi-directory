package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateFleetCapacityInput
 * Represents the input for a request operation.
**/
public class UpdateFleetCapacityInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DesiredInstances")
    public Long desiredInstances;
    public UpdateFleetCapacityInput withDesiredInstances(Long desiredInstances) {
        this.desiredInstances = desiredInstances;
        return this;
    }
    @JsonProperty("FleetId")
    public String fleetId;
    public UpdateFleetCapacityInput withFleetId(String fleetId) {
        this.fleetId = fleetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Location")
    public String location;
    public UpdateFleetCapacityInput withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxSize")
    public Long maxSize;
    public UpdateFleetCapacityInput withMaxSize(Long maxSize) {
        this.maxSize = maxSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MinSize")
    public Long minSize;
    public UpdateFleetCapacityInput withMinSize(Long minSize) {
        this.minSize = minSize;
        return this;
    }
}