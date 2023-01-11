package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExecutionTrigger
 * The interaction or event that started a pipeline execution.
**/
public class ExecutionTrigger {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("triggerDetail")
    public String triggerDetail;
    public ExecutionTrigger withTriggerDetail(String triggerDetail) {
        this.triggerDetail = triggerDetail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("triggerType")
    public TriggerTypeEnum triggerType;
    public ExecutionTrigger withTriggerType(TriggerTypeEnum triggerType) {
        this.triggerType = triggerType;
        return this;
    }
}