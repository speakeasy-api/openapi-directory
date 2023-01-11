package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Compute
 * Compute information for the simulation job.
**/
public class Compute {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("simulationUnitLimit")
    public Long simulationUnitLimit;
    public Compute withSimulationUnitLimit(Long simulationUnitLimit) {
        this.simulationUnitLimit = simulationUnitLimit;
        return this;
    }
}