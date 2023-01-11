package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TriggerProperties
 *  Specifies the configuration details that control the trigger for a flow. Currently, these settings only apply to the <code>Scheduled</code> trigger type. 
**/
public class TriggerProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Scheduled")
    public ScheduledTriggerProperties scheduled;
    public TriggerProperties withScheduled(ScheduledTriggerProperties scheduled) {
        this.scheduled = scheduled;
        return this;
    }
}