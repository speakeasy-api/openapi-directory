package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class HttpRulePost {
    @JsonProperty("requestMode")
    public HttpRulePostRequestModeEnum requestMode;
    public HttpRulePost withRequestMode(HttpRulePostRequestModeEnum requestMode) {
        this.requestMode = requestMode;
        return this;
    }
    @JsonProperty("ruleType")
    public HttpRulePostRuleTypeEnum ruleType;
    public HttpRulePost withRuleType(HttpRulePostRuleTypeEnum ruleType) {
        this.ruleType = ruleType;
        return this;
    }
    @JsonProperty("source")
    public RuleSource source;
    public HttpRulePost withSource(RuleSource source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public HttpRulePostStatusEnum status;
    public HttpRulePost withStatus(HttpRulePostStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("target")
    public HttpRulePostTarget target;
    public HttpRulePost withTarget(HttpRulePostTarget target) {
        this.target = target;
        return this;
    }
}