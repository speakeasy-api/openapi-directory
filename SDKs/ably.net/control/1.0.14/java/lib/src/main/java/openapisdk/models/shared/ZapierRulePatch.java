package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ZapierRulePatch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestMode")
    public ZapierRulePatchRequestModeEnum requestMode;
    public ZapierRulePatch withRequestMode(ZapierRulePatchRequestModeEnum requestMode) {
        this.requestMode = requestMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ruleType")
    public ZapierRulePatchRuleTypeEnum ruleType;
    public ZapierRulePatch withRuleType(ZapierRulePatchRuleTypeEnum ruleType) {
        this.ruleType = ruleType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public RuleSource source;
    public ZapierRulePatch withSource(RuleSource source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ZapierRulePatchStatusEnum status;
    public ZapierRulePatch withStatus(ZapierRulePatchStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target")
    public ZapierRulePatchTarget target;
    public ZapierRulePatch withTarget(ZapierRulePatchTarget target) {
        this.target = target;
        return this;
    }
}