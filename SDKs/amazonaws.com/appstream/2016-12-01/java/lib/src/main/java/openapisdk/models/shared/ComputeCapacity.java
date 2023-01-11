package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ComputeCapacity
 * Describes the capacity for a fleet.
**/
public class ComputeCapacity {
    @JsonProperty("DesiredInstances")
    public Long desiredInstances;
    public ComputeCapacity withDesiredInstances(Long desiredInstances) {
        this.desiredInstances = desiredInstances;
        return this;
    }
}