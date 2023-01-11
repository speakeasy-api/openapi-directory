package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateTriggerResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Trigger")
    public Trigger trigger;
    public UpdateTriggerResponse withTrigger(Trigger trigger) {
        this.trigger = trigger;
        return this;
    }
}