package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AmqpExternalRulePost {
    @JsonProperty("requestMode")
    public AmqpExternalRulePostRequestModeEnum requestMode;
    public AmqpExternalRulePost withRequestMode(AmqpExternalRulePostRequestModeEnum requestMode) {
        this.requestMode = requestMode;
        return this;
    }
    @JsonProperty("ruleType")
    public AmqpExternalRulePostRuleTypeEnum ruleType;
    public AmqpExternalRulePost withRuleType(AmqpExternalRulePostRuleTypeEnum ruleType) {
        this.ruleType = ruleType;
        return this;
    }
    @JsonProperty("source")
    public RuleSource source;
    public AmqpExternalRulePost withSource(RuleSource source) {
        this.source = source;
        return this;
    }
    @JsonProperty("target")
    public AmqpExternalRulePostTarget target;
    public AmqpExternalRulePost withTarget(AmqpExternalRulePostTarget target) {
        this.target = target;
        return this;
    }
}