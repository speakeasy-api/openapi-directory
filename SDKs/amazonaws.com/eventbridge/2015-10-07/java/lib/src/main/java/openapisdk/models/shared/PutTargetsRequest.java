package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutTargetsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventBusName")
    public String eventBusName;
    public PutTargetsRequest withEventBusName(String eventBusName) {
        this.eventBusName = eventBusName;
        return this;
    }
    @JsonProperty("Rule")
    public String rule;
    public PutTargetsRequest withRule(String rule) {
        this.rule = rule;
        return this;
    }
    @JsonProperty("Targets")
    public Target[] targets;
    public PutTargetsRequest withTargets(Target[] targets) {
        this.targets = targets;
        return this;
    }
}