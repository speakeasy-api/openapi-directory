package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TriggerNodeDetails
 * The details of a Trigger node present in the workflow.
**/
public class TriggerNodeDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Trigger")
    public Trigger trigger;
    public TriggerNodeDetails withTrigger(Trigger trigger) {
        this.trigger = trigger;
        return this;
    }
}