package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StateChangeConfiguration
 * Contains the configuration information of alarm state changes.
**/
public class StateChangeConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("triggerType")
    public TriggerTypeEnum triggerType;
    public StateChangeConfiguration withTriggerType(TriggerTypeEnum triggerType) {
        this.triggerType = triggerType;
        return this;
    }
}