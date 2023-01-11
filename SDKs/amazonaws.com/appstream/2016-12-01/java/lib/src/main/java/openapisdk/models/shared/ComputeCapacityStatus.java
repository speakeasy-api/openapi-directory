package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ComputeCapacityStatus
 * Describes the capacity status for a fleet.
**/
public class ComputeCapacityStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Available")
    public Long available;
    public ComputeCapacityStatus withAvailable(Long available) {
        this.available = available;
        return this;
    }
    @JsonProperty("Desired")
    public Long desired;
    public ComputeCapacityStatus withDesired(Long desired) {
        this.desired = desired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InUse")
    public Long inUse;
    public ComputeCapacityStatus withInUse(Long inUse) {
        this.inUse = inUse;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Running")
    public Long running;
    public ComputeCapacityStatus withRunning(Long running) {
        this.running = running;
        return this;
    }
}