package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AwsSqsRulePost {
    @JsonProperty("requestMode")
    public AwsSqsRulePostRequestModeEnum requestMode;
    public AwsSqsRulePost withRequestMode(AwsSqsRulePostRequestModeEnum requestMode) {
        this.requestMode = requestMode;
        return this;
    }
    @JsonProperty("ruleType")
    public AwsSqsRulePostRuleTypeEnum ruleType;
    public AwsSqsRulePost withRuleType(AwsSqsRulePostRuleTypeEnum ruleType) {
        this.ruleType = ruleType;
        return this;
    }
    @JsonProperty("source")
    public RuleSource source;
    public AwsSqsRulePost withSource(RuleSource source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public AwsSqsRulePostStatusEnum status;
    public AwsSqsRulePost withStatus(AwsSqsRulePostStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("target")
    public AwsSqsRulePostTarget target;
    public AwsSqsRulePost withTarget(AwsSqsRulePostTarget target) {
        this.target = target;
        return this;
    }
}