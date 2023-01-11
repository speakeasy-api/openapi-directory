package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AwsKinesisRulePatch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestMode")
    public AwsKinesisRulePatchRequestModeEnum requestMode;
    public AwsKinesisRulePatch withRequestMode(AwsKinesisRulePatchRequestModeEnum requestMode) {
        this.requestMode = requestMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ruleType")
    public AwsKinesisRulePatchRuleTypeEnum ruleType;
    public AwsKinesisRulePatch withRuleType(AwsKinesisRulePatchRuleTypeEnum ruleType) {
        this.ruleType = ruleType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public RuleSource source;
    public AwsKinesisRulePatch withSource(RuleSource source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public AwsKinesisRulePatchStatusEnum status;
    public AwsKinesisRulePatch withStatus(AwsKinesisRulePatchStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target")
    public AwsKinesisRulePatchTarget target;
    public AwsKinesisRulePatch withTarget(AwsKinesisRulePatchTarget target) {
        this.target = target;
        return this;
    }
}