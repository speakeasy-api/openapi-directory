package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CloudflareWorkerRulePost {
    @JsonProperty("requestMode")
    public CloudflareWorkerRulePostRequestModeEnum requestMode;
    public CloudflareWorkerRulePost withRequestMode(CloudflareWorkerRulePostRequestModeEnum requestMode) {
        this.requestMode = requestMode;
        return this;
    }
    @JsonProperty("ruleType")
    public CloudflareWorkerRulePostRuleTypeEnum ruleType;
    public CloudflareWorkerRulePost withRuleType(CloudflareWorkerRulePostRuleTypeEnum ruleType) {
        this.ruleType = ruleType;
        return this;
    }
    @JsonProperty("source")
    public RuleSource source;
    public CloudflareWorkerRulePost withSource(RuleSource source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public CloudflareWorkerRulePostStatusEnum status;
    public CloudflareWorkerRulePost withStatus(CloudflareWorkerRulePostStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("target")
    public CloudflareWorkerRulePostTarget target;
    public CloudflareWorkerRulePost withTarget(CloudflareWorkerRulePostTarget target) {
        this.target = target;
        return this;
    }
}