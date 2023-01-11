package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class HttpRuleResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public java.util.Map<String, Object> links;
    public HttpRuleResponse withLinks(java.util.Map<String, Object> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appId")
    public String appId;
    public HttpRuleResponse withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created")
    public Double created;
    public HttpRuleResponse withCreated(Double created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public HttpRuleResponse withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modified")
    public Double modified;
    public HttpRuleResponse withModified(Double modified) {
        this.modified = modified;
        return this;
    }
    @JsonProperty("requestMode")
    public HttpRuleResponseRequestModeEnum requestMode;
    public HttpRuleResponse withRequestMode(HttpRuleResponseRequestModeEnum requestMode) {
        this.requestMode = requestMode;
        return this;
    }
    @JsonProperty("ruleType")
    public HttpRuleResponseRuleTypeEnum ruleType;
    public HttpRuleResponse withRuleType(HttpRuleResponseRuleTypeEnum ruleType) {
        this.ruleType = ruleType;
        return this;
    }
    @JsonProperty("source")
    public RuleSource source;
    public HttpRuleResponse withSource(RuleSource source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public HttpRuleResponseStatusEnum status;
    public HttpRuleResponse withStatus(HttpRuleResponseStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("target")
    public HttpRuleResponseTarget target;
    public HttpRuleResponse withTarget(HttpRuleResponseTarget target) {
        this.target = target;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public HttpRuleResponse withVersion(String version) {
        this.version = version;
        return this;
    }
}