package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AwsSqsRulePatch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestMode")
    public AwsSqsRulePatchRequestModeEnum requestMode;
    public AwsSqsRulePatch withRequestMode(AwsSqsRulePatchRequestModeEnum requestMode) {
        this.requestMode = requestMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ruleType")
    public AwsSqsRulePatchRuleTypeEnum ruleType;
    public AwsSqsRulePatch withRuleType(AwsSqsRulePatchRuleTypeEnum ruleType) {
        this.ruleType = ruleType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public RuleSource source;
    public AwsSqsRulePatch withSource(RuleSource source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public AwsSqsRulePatchStatusEnum status;
    public AwsSqsRulePatch withStatus(AwsSqsRulePatchStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target")
    public AwsSqsRulePatchTarget target;
    public AwsSqsRulePatch withTarget(AwsSqsRulePatchTarget target) {
        this.target = target;
        return this;
    }
}