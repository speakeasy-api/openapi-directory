package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AwsKinesisRuleResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public java.util.Map<String, Object> links;
    public AwsKinesisRuleResponse withLinks(java.util.Map<String, Object> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appId")
    public String appId;
    public AwsKinesisRuleResponse withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created")
    public Double created;
    public AwsKinesisRuleResponse withCreated(Double created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AwsKinesisRuleResponse withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modified")
    public Double modified;
    public AwsKinesisRuleResponse withModified(Double modified) {
        this.modified = modified;
        return this;
    }
    @JsonProperty("requestMode")
    public AwsKinesisRuleResponseRequestModeEnum requestMode;
    public AwsKinesisRuleResponse withRequestMode(AwsKinesisRuleResponseRequestModeEnum requestMode) {
        this.requestMode = requestMode;
        return this;
    }
    @JsonProperty("ruleType")
    public AwsKinesisRuleResponseRuleTypeEnum ruleType;
    public AwsKinesisRuleResponse withRuleType(AwsKinesisRuleResponseRuleTypeEnum ruleType) {
        this.ruleType = ruleType;
        return this;
    }
    @JsonProperty("source")
    public RuleSource source;
    public AwsKinesisRuleResponse withSource(RuleSource source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public AwsKinesisRuleResponseStatusEnum status;
    public AwsKinesisRuleResponse withStatus(AwsKinesisRuleResponseStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("target")
    public AwsKinesisRuleResponseTarget target;
    public AwsKinesisRuleResponse withTarget(AwsKinesisRuleResponseTarget target) {
        this.target = target;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public AwsKinesisRuleResponse withVersion(String version) {
        this.version = version;
        return this;
    }
}