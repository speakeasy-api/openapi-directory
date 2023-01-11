package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GoogleCloudFunctionRuleResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public java.util.Map<String, Object> links;
    public GoogleCloudFunctionRuleResponse withLinks(java.util.Map<String, Object> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appId")
    public String appId;
    public GoogleCloudFunctionRuleResponse withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created")
    public Double created;
    public GoogleCloudFunctionRuleResponse withCreated(Double created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GoogleCloudFunctionRuleResponse withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modified")
    public Double modified;
    public GoogleCloudFunctionRuleResponse withModified(Double modified) {
        this.modified = modified;
        return this;
    }
    @JsonProperty("requestMode")
    public GoogleCloudFunctionRuleResponseRequestModeEnum requestMode;
    public GoogleCloudFunctionRuleResponse withRequestMode(GoogleCloudFunctionRuleResponseRequestModeEnum requestMode) {
        this.requestMode = requestMode;
        return this;
    }
    @JsonProperty("ruleType")
    public GoogleCloudFunctionRuleResponseRuleTypeEnum ruleType;
    public GoogleCloudFunctionRuleResponse withRuleType(GoogleCloudFunctionRuleResponseRuleTypeEnum ruleType) {
        this.ruleType = ruleType;
        return this;
    }
    @JsonProperty("source")
    public RuleSource source;
    public GoogleCloudFunctionRuleResponse withSource(RuleSource source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public GoogleCloudFunctionRuleResponseStatusEnum status;
    public GoogleCloudFunctionRuleResponse withStatus(GoogleCloudFunctionRuleResponseStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("target")
    public GoogleCloudFunctionRuleResponseTarget target;
    public GoogleCloudFunctionRuleResponse withTarget(GoogleCloudFunctionRuleResponseTarget target) {
        this.target = target;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public GoogleCloudFunctionRuleResponse withVersion(String version) {
        this.version = version;
        return this;
    }
}