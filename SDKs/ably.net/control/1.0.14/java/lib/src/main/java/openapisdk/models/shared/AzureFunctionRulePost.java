package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AzureFunctionRulePost {
    @JsonProperty("requestMode")
    public AzureFunctionRulePostRequestModeEnum requestMode;
    public AzureFunctionRulePost withRequestMode(AzureFunctionRulePostRequestModeEnum requestMode) {
        this.requestMode = requestMode;
        return this;
    }
    @JsonProperty("ruleType")
    public AzureFunctionRulePostRuleTypeEnum ruleType;
    public AzureFunctionRulePost withRuleType(AzureFunctionRulePostRuleTypeEnum ruleType) {
        this.ruleType = ruleType;
        return this;
    }
    @JsonProperty("source")
    public RuleSource source;
    public AzureFunctionRulePost withSource(RuleSource source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public AzureFunctionRulePostStatusEnum status;
    public AzureFunctionRulePost withStatus(AzureFunctionRulePostStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("target")
    public AzureFunctionRulePostTarget target;
    public AzureFunctionRulePost withTarget(AzureFunctionRulePostTarget target) {
        this.target = target;
        return this;
    }
}