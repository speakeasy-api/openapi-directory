package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReplaceTopicRuleRequestBodyTopicRulePayload
 * Describes a rule.
**/
public class ReplaceTopicRuleRequestBodyTopicRulePayload {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actions")
    public openapisdk.models.shared.Action[] actions;
    public ReplaceTopicRuleRequestBodyTopicRulePayload withActions(openapisdk.models.shared.Action[] actions) {
        this.actions = actions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awsIotSqlVersion")
    public String awsIotSqlVersion;
    public ReplaceTopicRuleRequestBodyTopicRulePayload withAwsIotSqlVersion(String awsIotSqlVersion) {
        this.awsIotSqlVersion = awsIotSqlVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ReplaceTopicRuleRequestBodyTopicRulePayload withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorAction")
    public openapisdk.models.shared.Action errorAction;
    public ReplaceTopicRuleRequestBodyTopicRulePayload withErrorAction(openapisdk.models.shared.Action errorAction) {
        this.errorAction = errorAction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ruleDisabled")
    public Boolean ruleDisabled;
    public ReplaceTopicRuleRequestBodyTopicRulePayload withRuleDisabled(Boolean ruleDisabled) {
        this.ruleDisabled = ruleDisabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sql")
    public String sql;
    public ReplaceTopicRuleRequestBodyTopicRulePayload withSql(String sql) {
        this.sql = sql;
        return this;
    }
}