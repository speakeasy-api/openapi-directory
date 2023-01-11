package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateSimulationJobRequestBodyCompute
 * Compute information for the simulation job.
**/
public class CreateSimulationJobRequestBodyCompute {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("simulationUnitLimit")
    public Long simulationUnitLimit;
    public CreateSimulationJobRequestBodyCompute withSimulationUnitLimit(Long simulationUnitLimit) {
        this.simulationUnitLimit = simulationUnitLimit;
        return this;
    }
}