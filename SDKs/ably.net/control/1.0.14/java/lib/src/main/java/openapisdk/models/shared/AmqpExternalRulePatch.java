package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AmqpExternalRulePatch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestMode")
    public AmqpExternalRulePatchRequestModeEnum requestMode;
    public AmqpExternalRulePatch withRequestMode(AmqpExternalRulePatchRequestModeEnum requestMode) {
        this.requestMode = requestMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ruleType")
    public AmqpExternalRulePatchRuleTypeEnum ruleType;
    public AmqpExternalRulePatch withRuleType(AmqpExternalRulePatchRuleTypeEnum ruleType) {
        this.ruleType = ruleType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public RuleSource source;
    public AmqpExternalRulePatch withSource(RuleSource source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public AmqpExternalRulePatchStatusEnum status;
    public AmqpExternalRulePatch withStatus(AmqpExternalRulePatchStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target")
    public AmqpExternalRulePatchTarget target;
    public AmqpExternalRulePatch withTarget(AmqpExternalRulePatchTarget target) {
        this.target = target;
        return this;
    }
}