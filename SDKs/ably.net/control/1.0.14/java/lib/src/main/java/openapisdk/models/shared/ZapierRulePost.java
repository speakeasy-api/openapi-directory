package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ZapierRulePost {
    @JsonProperty("requestMode")
    public ZapierRulePostRequestModeEnum requestMode;
    public ZapierRulePost withRequestMode(ZapierRulePostRequestModeEnum requestMode) {
        this.requestMode = requestMode;
        return this;
    }
    @JsonProperty("ruleType")
    public ZapierRulePostRuleTypeEnum ruleType;
    public ZapierRulePost withRuleType(ZapierRulePostRuleTypeEnum ruleType) {
        this.ruleType = ruleType;
        return this;
    }
    @JsonProperty("source")
    public RuleSource source;
    public ZapierRulePost withSource(RuleSource source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ZapierRulePostStatusEnum status;
    public ZapierRulePost withStatus(ZapierRulePostStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("target")
    public ZapierRulePostTarget target;
    public ZapierRulePost withTarget(ZapierRulePostTarget target) {
        this.target = target;
        return this;
    }
}