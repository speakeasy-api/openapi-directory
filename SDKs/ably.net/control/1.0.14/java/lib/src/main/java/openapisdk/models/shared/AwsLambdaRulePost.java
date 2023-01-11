package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AwsLambdaRulePost {
    @JsonProperty("requestMode")
    public AwsLambdaRulePostRequestModeEnum requestMode;
    public AwsLambdaRulePost withRequestMode(AwsLambdaRulePostRequestModeEnum requestMode) {
        this.requestMode = requestMode;
        return this;
    }
    @JsonProperty("ruleType")
    public AwsLambdaRulePostRuleTypeEnum ruleType;
    public AwsLambdaRulePost withRuleType(AwsLambdaRulePostRuleTypeEnum ruleType) {
        this.ruleType = ruleType;
        return this;
    }
    @JsonProperty("source")
    public RuleSource source;
    public AwsLambdaRulePost withSource(RuleSource source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public AwsLambdaRulePostStatusEnum status;
    public AwsLambdaRulePost withStatus(AwsLambdaRulePostStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("target")
    public AwsLambdaRulePostTarget target;
    public AwsLambdaRulePost withTarget(AwsLambdaRulePostTarget target) {
        this.target = target;
        return this;
    }
}