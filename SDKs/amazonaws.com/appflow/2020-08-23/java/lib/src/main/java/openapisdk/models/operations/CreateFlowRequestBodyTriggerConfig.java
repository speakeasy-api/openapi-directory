package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateFlowRequestBodyTriggerConfig
 *  The trigger settings that determine how and when Amazon AppFlow runs the specified flow. 
**/
public class CreateFlowRequestBodyTriggerConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("triggerProperties")
    public openapisdk.models.shared.TriggerProperties triggerProperties;
    public CreateFlowRequestBodyTriggerConfig withTriggerProperties(openapisdk.models.shared.TriggerProperties triggerProperties) {
        this.triggerProperties = triggerProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("triggerType")
    public openapisdk.models.shared.TriggerTypeEnum triggerType;
    public CreateFlowRequestBodyTriggerConfig withTriggerType(openapisdk.models.shared.TriggerTypeEnum triggerType) {
        this.triggerType = triggerType;
        return this;
    }
}