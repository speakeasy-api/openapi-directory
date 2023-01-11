package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AmqpRulePost {
    @JsonProperty("requestMode")
    public AmqpRulePostRequestModeEnum requestMode;
    public AmqpRulePost withRequestMode(AmqpRulePostRequestModeEnum requestMode) {
        this.requestMode = requestMode;
        return this;
    }
    @JsonProperty("ruleType")
    public AmqpRulePostRuleTypeEnum ruleType;
    public AmqpRulePost withRuleType(AmqpRulePostRuleTypeEnum ruleType) {
        this.ruleType = ruleType;
        return this;
    }
    @JsonProperty("source")
    public RuleSource source;
    public AmqpRulePost withSource(RuleSource source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public AmqpRulePostStatusEnum status;
    public AmqpRulePost withStatus(AmqpRulePostStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("target")
    public AmqpRulePostTarget target;
    public AmqpRulePost withTarget(AmqpRulePostTarget target) {
        this.target = target;
        return this;
    }
}