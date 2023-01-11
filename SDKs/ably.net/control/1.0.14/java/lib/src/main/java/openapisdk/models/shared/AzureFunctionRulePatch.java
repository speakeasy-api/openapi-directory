package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AzureFunctionRulePatch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestMode")
    public AzureFunctionRulePatchRequestModeEnum requestMode;
    public AzureFunctionRulePatch withRequestMode(AzureFunctionRulePatchRequestModeEnum requestMode) {
        this.requestMode = requestMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ruleType")
    public AzureFunctionRulePatchRuleTypeEnum ruleType;
    public AzureFunctionRulePatch withRuleType(AzureFunctionRulePatchRuleTypeEnum ruleType) {
        this.ruleType = ruleType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public RuleSource source;
    public AzureFunctionRulePatch withSource(RuleSource source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public AzureFunctionRulePatchStatusEnum status;
    public AzureFunctionRulePatch withStatus(AzureFunctionRulePatchStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target")
    public AzureFunctionRulePatchTarget target;
    public AzureFunctionRulePatch withTarget(AzureFunctionRulePatchTarget target) {
        this.target = target;
        return this;
    }
}