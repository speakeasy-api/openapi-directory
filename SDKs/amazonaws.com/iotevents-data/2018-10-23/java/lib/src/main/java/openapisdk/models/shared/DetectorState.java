package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DetectorState
 * Information about the current state of the detector instance.
**/
public class DetectorState {
    @JsonProperty("stateName")
    public String stateName;
    public DetectorState withStateName(String stateName) {
        this.stateName = stateName;
        return this;
    }
    @JsonProperty("timers")
    public Timer[] timers;
    public DetectorState withTimers(Timer[] timers) {
        this.timers = timers;
        return this;
    }
    @JsonProperty("variables")
    public Variable[] variables;
    public DetectorState withVariables(Variable[] variables) {
        this.variables = variables;
        return this;
    }
}