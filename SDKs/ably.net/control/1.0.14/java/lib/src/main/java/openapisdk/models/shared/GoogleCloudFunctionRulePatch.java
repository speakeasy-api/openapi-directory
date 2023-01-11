package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GoogleCloudFunctionRulePatch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestMode")
    public GoogleCloudFunctionRulePatchRequestModeEnum requestMode;
    public GoogleCloudFunctionRulePatch withRequestMode(GoogleCloudFunctionRulePatchRequestModeEnum requestMode) {
        this.requestMode = requestMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ruleType")
    public GoogleCloudFunctionRulePatchRuleTypeEnum ruleType;
    public GoogleCloudFunctionRulePatch withRuleType(GoogleCloudFunctionRulePatchRuleTypeEnum ruleType) {
        this.ruleType = ruleType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public RuleSource source;
    public GoogleCloudFunctionRulePatch withSource(RuleSource source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public GoogleCloudFunctionRulePatchStatusEnum status;
    public GoogleCloudFunctionRulePatch withStatus(GoogleCloudFunctionRulePatchStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target")
    public GoogleCloudFunctionRulePatchTarget target;
    public GoogleCloudFunctionRulePatch withTarget(GoogleCloudFunctionRulePatchTarget target) {
        this.target = target;
        return this;
    }
}