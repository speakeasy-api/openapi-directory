package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Rule {
    @JsonProperty("actionName")
    public OptimisationActionNameEnum actionName;
    public Rule withActionName(OptimisationActionNameEnum actionName) {
        this.actionName = actionName;
        return this;
    }
    @JsonProperty("enabled")
    public Boolean enabled;
    public Rule withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastExecutionStatus")
    public RuleLastExecutionStatusEnum lastExecutionStatus;
    public Rule withLastExecutionStatus(RuleLastExecutionStatusEnum lastExecutionStatus) {
        this.lastExecutionStatus = lastExecutionStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastExecutionUtcDate")
    public OffsetDateTime lastExecutionUtcDate;
    public Rule withLastExecutionUtcDate(OffsetDateTime lastExecutionUtcDate) {
        this.lastExecutionUtcDate = lastExecutionUtcDate;
        return this;
    }
    @JsonProperty("links")
    public RuleLinks links;
    public Rule withLinks(RuleLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("position")
    public Long position;
    public Rule withPosition(Long position) {
        this.position = position;
        return this;
    }
    @JsonProperty("reportFilterId")
    public String reportFilterId;
    public Rule withReportFilterId(String reportFilterId) {
        this.reportFilterId = reportFilterId;
        return this;
    }
    @JsonProperty("ruleId")
    public String ruleId;
    public Rule withRuleId(String ruleId) {
        this.ruleId = ruleId;
        return this;
    }
    @JsonProperty("ruleName")
    public String ruleName;
    public Rule withRuleName(String ruleName) {
        this.ruleName = ruleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("validityEndUtcDate")
    public OffsetDateTime validityEndUtcDate;
    public Rule withValidityEndUtcDate(OffsetDateTime validityEndUtcDate) {
        this.validityEndUtcDate = validityEndUtcDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("validityStartUtcDate")
    public OffsetDateTime validityStartUtcDate;
    public Rule withValidityStartUtcDate(OffsetDateTime validityStartUtcDate) {
        this.validityStartUtcDate = validityStartUtcDate;
        return this;
    }
}