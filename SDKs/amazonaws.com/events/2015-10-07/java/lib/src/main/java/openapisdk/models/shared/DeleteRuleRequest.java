package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteRuleRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventBusName")
    public String eventBusName;
    public DeleteRuleRequest withEventBusName(String eventBusName) {
        this.eventBusName = eventBusName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Force")
    public Boolean force;
    public DeleteRuleRequest withForce(Boolean force) {
        this.force = force;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public DeleteRuleRequest withName(String name) {
        this.name = name;
        return this;
    }
}