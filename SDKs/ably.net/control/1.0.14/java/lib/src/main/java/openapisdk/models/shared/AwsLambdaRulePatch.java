package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AwsLambdaRulePatch {
    @JsonProperty("requestMode")
    public AwsLambdaRulePatchRequestModeEnum requestMode;
    public AwsLambdaRulePatch withRequestMode(AwsLambdaRulePatchRequestModeEnum requestMode) {
        this.requestMode = requestMode;
        return this;
    }
    @JsonProperty("ruleType")
    public AwsLambdaRulePatchRuleTypeEnum ruleType;
    public AwsLambdaRulePatch withRuleType(AwsLambdaRulePatchRuleTypeEnum ruleType) {
        this.ruleType = ruleType;
        return this;
    }
    @JsonProperty("source")
    public RuleSource source;
    public AwsLambdaRulePatch withSource(RuleSource source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public AwsLambdaRulePatchStatusEnum status;
    public AwsLambdaRulePatch withStatus(AwsLambdaRulePatchStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("target")
    public AwsLambdaRulePatchTarget target;
    public AwsLambdaRulePatch withTarget(AwsLambdaRulePatchTarget target) {
        this.target = target;
        return this;
    }
}