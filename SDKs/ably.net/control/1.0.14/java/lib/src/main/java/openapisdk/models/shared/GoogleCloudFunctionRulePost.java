package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GoogleCloudFunctionRulePost {
    @JsonProperty("requestMode")
    public GoogleCloudFunctionRulePostRequestModeEnum requestMode;
    public GoogleCloudFunctionRulePost withRequestMode(GoogleCloudFunctionRulePostRequestModeEnum requestMode) {
        this.requestMode = requestMode;
        return this;
    }
    @JsonProperty("ruleType")
    public GoogleCloudFunctionRulePostRuleTypeEnum ruleType;
    public GoogleCloudFunctionRulePost withRuleType(GoogleCloudFunctionRulePostRuleTypeEnum ruleType) {
        this.ruleType = ruleType;
        return this;
    }
    @JsonProperty("source")
    public RuleSource source;
    public GoogleCloudFunctionRulePost withSource(RuleSource source) {
        this.source = source;
        return this;
    }
    @JsonProperty("target")
    public GoogleCloudFunctionRulePostTarget target;
    public GoogleCloudFunctionRulePost withTarget(GoogleCloudFunctionRulePostTarget target) {
        this.target = target;
        return this;
    }
}