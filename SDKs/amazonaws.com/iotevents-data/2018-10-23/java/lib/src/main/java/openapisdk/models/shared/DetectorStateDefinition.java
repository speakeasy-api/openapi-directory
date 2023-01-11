package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DetectorStateDefinition
 * The new state, variable values, and timer settings of the detector (instance).
**/
public class DetectorStateDefinition {
    @JsonProperty("stateName")
    public String stateName;
    public DetectorStateDefinition withStateName(String stateName) {
        this.stateName = stateName;
        return this;
    }
    @JsonProperty("timers")
    public TimerDefinition[] timers;
    public DetectorStateDefinition withTimers(TimerDefinition[] timers) {
        this.timers = timers;
        return this;
    }
    @JsonProperty("variables")
    public VariableDefinition[] variables;
    public DetectorStateDefinition withVariables(VariableDefinition[] variables) {
        this.variables = variables;
        return this;
    }
}