package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CloudflareWorkerRulePatch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestMode")
    public CloudflareWorkerRulePatchRequestModeEnum requestMode;
    public CloudflareWorkerRulePatch withRequestMode(CloudflareWorkerRulePatchRequestModeEnum requestMode) {
        this.requestMode = requestMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ruleType")
    public CloudflareWorkerRulePatchRuleTypeEnum ruleType;
    public CloudflareWorkerRulePatch withRuleType(CloudflareWorkerRulePatchRuleTypeEnum ruleType) {
        this.ruleType = ruleType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public RuleSource source;
    public CloudflareWorkerRulePatch withSource(RuleSource source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public CloudflareWorkerRulePatchStatusEnum status;
    public CloudflareWorkerRulePatch withStatus(CloudflareWorkerRulePatchStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target")
    public CloudflareWorkerRulePatchTarget target;
    public CloudflareWorkerRulePatch withTarget(CloudflareWorkerRulePatchTarget target) {
        this.target = target;
        return this;
    }
}