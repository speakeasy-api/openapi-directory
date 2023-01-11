package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AwsKinesisRulePost {
    @JsonProperty("requestMode")
    public AwsKinesisRulePostRequestModeEnum requestMode;
    public AwsKinesisRulePost withRequestMode(AwsKinesisRulePostRequestModeEnum requestMode) {
        this.requestMode = requestMode;
        return this;
    }
    @JsonProperty("ruleType")
    public AwsKinesisRulePostRuleTypeEnum ruleType;
    public AwsKinesisRulePost withRuleType(AwsKinesisRulePostRuleTypeEnum ruleType) {
        this.ruleType = ruleType;
        return this;
    }
    @JsonProperty("source")
    public RuleSource source;
    public AwsKinesisRulePost withSource(RuleSource source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public AwsKinesisRulePostStatusEnum status;
    public AwsKinesisRulePost withStatus(AwsKinesisRulePostStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("target")
    public AwsKinesisRulePostTarget target;
    public AwsKinesisRulePost withTarget(AwsKinesisRulePostTarget target) {
        this.target = target;
        return this;
    }
}