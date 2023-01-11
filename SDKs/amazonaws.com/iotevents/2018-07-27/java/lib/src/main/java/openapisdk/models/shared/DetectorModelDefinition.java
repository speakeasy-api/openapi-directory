package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DetectorModelDefinition
 * Information that defines how a detector operates.
**/
public class DetectorModelDefinition {
    @JsonProperty("initialStateName")
    public String initialStateName;
    public DetectorModelDefinition withInitialStateName(String initialStateName) {
        this.initialStateName = initialStateName;
        return this;
    }
    @JsonProperty("states")
    public State[] states;
    public DetectorModelDefinition withStates(State[] states) {
        this.states = states;
        return this;
    }
}