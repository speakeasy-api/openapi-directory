package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DisableRuleRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventBusName")
    public String eventBusName;
    public DisableRuleRequest withEventBusName(String eventBusName) {
        this.eventBusName = eventBusName;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public DisableRuleRequest withName(String name) {
        this.name = name;
        return this;
    }
}