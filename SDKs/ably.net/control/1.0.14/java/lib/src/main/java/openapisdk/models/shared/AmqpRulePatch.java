package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AmqpRulePatch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestMode")
    public AmqpRulePatchRequestModeEnum requestMode;
    public AmqpRulePatch withRequestMode(AmqpRulePatchRequestModeEnum requestMode) {
        this.requestMode = requestMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ruleType")
    public AmqpRulePatchRuleTypeEnum ruleType;
    public AmqpRulePatch withRuleType(AmqpRulePatchRuleTypeEnum ruleType) {
        this.ruleType = ruleType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public RuleSource source;
    public AmqpRulePatch withSource(RuleSource source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public AmqpRulePatchStatusEnum status;
    public AmqpRulePatch withStatus(AmqpRulePatchStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target")
    public AmqpRulePatchTarget target;
    public AmqpRulePatch withTarget(AmqpRulePatchTarget target) {
        this.target = target;
        return this;
    }
}