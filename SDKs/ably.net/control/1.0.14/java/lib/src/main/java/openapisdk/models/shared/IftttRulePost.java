package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class IftttRulePost {
    @JsonProperty("requestMode")
    public IftttRulePostRequestModeEnum requestMode;
    public IftttRulePost withRequestMode(IftttRulePostRequestModeEnum requestMode) {
        this.requestMode = requestMode;
        return this;
    }
    @JsonProperty("ruleType")
    public IftttRulePostRuleTypeEnum ruleType;
    public IftttRulePost withRuleType(IftttRulePostRuleTypeEnum ruleType) {
        this.ruleType = ruleType;
        return this;
    }
    @JsonProperty("source")
    public RuleSource source;
    public IftttRulePost withSource(RuleSource source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public IftttRulePostStatusEnum status;
    public IftttRulePost withStatus(IftttRulePostStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("target")
    public IftttRulePostTarget target;
    public IftttRulePost withTarget(IftttRulePostTarget target) {
        this.target = target;
        return this;
    }
}