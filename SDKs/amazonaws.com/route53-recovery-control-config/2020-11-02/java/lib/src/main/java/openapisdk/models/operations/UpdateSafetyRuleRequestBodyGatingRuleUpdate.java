package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateSafetyRuleRequestBodyGatingRuleUpdate
 * Update to a gating rule. You can update the name or the evaluation period (wait period). If you don't specify one of the items to update, the item is unchanged.
**/
public class UpdateSafetyRuleRequestBodyGatingRuleUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public UpdateSafetyRuleRequestBodyGatingRuleUpdate withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SafetyRuleArn")
    public String safetyRuleArn;
    public UpdateSafetyRuleRequestBodyGatingRuleUpdate withSafetyRuleArn(String safetyRuleArn) {
        this.safetyRuleArn = safetyRuleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WaitPeriodMs")
    public Long waitPeriodMs;
    public UpdateSafetyRuleRequestBodyGatingRuleUpdate withWaitPeriodMs(Long waitPeriodMs) {
        this.waitPeriodMs = waitPeriodMs;
        return this;
    }
}