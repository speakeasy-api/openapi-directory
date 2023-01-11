package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ExperimentTemplateAction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionId")
    public String actionId;
    public ExperimentTemplateAction withActionId(String actionId) {
        this.actionId = actionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ExperimentTemplateAction withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameters")
    public java.util.Map<String, String> parameters;
    public ExperimentTemplateAction withParameters(java.util.Map<String, String> parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startAfter")
    public String[] startAfter;
    public ExperimentTemplateAction withStartAfter(String[] startAfter) {
        this.startAfter = startAfter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targets")
    public java.util.Map<String, String> targets;
    public ExperimentTemplateAction withTargets(java.util.Map<String, String> targets) {
        this.targets = targets;
        return this;
    }
}