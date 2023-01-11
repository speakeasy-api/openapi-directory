package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RemoveTargetsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventBusName")
    public String eventBusName;
    public RemoveTargetsRequest withEventBusName(String eventBusName) {
        this.eventBusName = eventBusName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Force")
    public Boolean force;
    public RemoveTargetsRequest withForce(Boolean force) {
        this.force = force;
        return this;
    }
    @JsonProperty("Ids")
    public String[] ids;
    public RemoveTargetsRequest withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
    @JsonProperty("Rule")
    public String rule;
    public RemoveTargetsRequest withRule(String rule) {
        this.rule = rule;
        return this;
    }
}