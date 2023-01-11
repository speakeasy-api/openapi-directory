package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TriggerConfig
 *  The trigger settings that determine how and when Amazon AppFlow runs the specified flow. 
**/
public class TriggerConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("triggerProperties")
    public TriggerProperties triggerProperties;
    public TriggerConfig withTriggerProperties(TriggerProperties triggerProperties) {
        this.triggerProperties = triggerProperties;
        return this;
    }
    @JsonProperty("triggerType")
    public TriggerTypeEnum triggerType;
    public TriggerConfig withTriggerType(TriggerTypeEnum triggerType) {
        this.triggerType = triggerType;
        return this;
    }
}