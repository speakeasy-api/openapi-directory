package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ZapierRuleResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public java.util.Map<String, Object> links;
    public ZapierRuleResponse withLinks(java.util.Map<String, Object> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appId")
    public String appId;
    public ZapierRuleResponse withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created")
    public Double created;
    public ZapierRuleResponse withCreated(Double created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ZapierRuleResponse withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modified")
    public Double modified;
    public ZapierRuleResponse withModified(Double modified) {
        this.modified = modified;
        return this;
    }
    @JsonProperty("requestMode")
    public ZapierRuleResponseRequestModeEnum requestMode;
    public ZapierRuleResponse withRequestMode(ZapierRuleResponseRequestModeEnum requestMode) {
        this.requestMode = requestMode;
        return this;
    }
    @JsonProperty("ruleType")
    public ZapierRuleResponseRuleTypeEnum ruleType;
    public ZapierRuleResponse withRuleType(ZapierRuleResponseRuleTypeEnum ruleType) {
        this.ruleType = ruleType;
        return this;
    }
    @JsonProperty("source")
    public RuleSource source;
    public ZapierRuleResponse withSource(RuleSource source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ZapierRuleResponseStatusEnum status;
    public ZapierRuleResponse withStatus(ZapierRuleResponseStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("target")
    public ZapierRuleResponseTarget target;
    public ZapierRuleResponse withTarget(ZapierRuleResponseTarget target) {
        this.target = target;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public ZapierRuleResponse withVersion(String version) {
        this.version = version;
        return this;
    }
}