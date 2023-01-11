package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ExperimentAction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionId")
    public String actionId;
    public ExperimentAction withActionId(String actionId) {
        this.actionId = actionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ExperimentAction withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameters")
    public java.util.Map<String, String> parameters;
    public ExperimentAction withParameters(java.util.Map<String, String> parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startAfter")
    public String[] startAfter;
    public ExperimentAction withStartAfter(String[] startAfter) {
        this.startAfter = startAfter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public ExperimentActionState state;
    public ExperimentAction withState(ExperimentActionState state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targets")
    public java.util.Map<String, String> targets;
    public ExperimentAction withTargets(java.util.Map<String, String> targets) {
        this.targets = targets;
        return this;
    }
}