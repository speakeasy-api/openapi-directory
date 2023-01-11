package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class IftttRuleResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public java.util.Map<String, Object> links;
    public IftttRuleResponse withLinks(java.util.Map<String, Object> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appId")
    public String appId;
    public IftttRuleResponse withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created")
    public Double created;
    public IftttRuleResponse withCreated(Double created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public IftttRuleResponse withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modified")
    public Double modified;
    public IftttRuleResponse withModified(Double modified) {
        this.modified = modified;
        return this;
    }
    @JsonProperty("requestMode")
    public IftttRuleResponseRequestModeEnum requestMode;
    public IftttRuleResponse withRequestMode(IftttRuleResponseRequestModeEnum requestMode) {
        this.requestMode = requestMode;
        return this;
    }
    @JsonProperty("ruleType")
    public IftttRuleResponseRuleTypeEnum ruleType;
    public IftttRuleResponse withRuleType(IftttRuleResponseRuleTypeEnum ruleType) {
        this.ruleType = ruleType;
        return this;
    }
    @JsonProperty("source")
    public RuleSource source;
    public IftttRuleResponse withSource(RuleSource source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public IftttRuleResponseStatusEnum status;
    public IftttRuleResponse withStatus(IftttRuleResponseStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("target")
    public IftttRuleResponseTarget target;
    public IftttRuleResponse withTarget(IftttRuleResponseTarget target) {
        this.target = target;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public IftttRuleResponse withVersion(String version) {
        this.version = version;
        return this;
    }
}