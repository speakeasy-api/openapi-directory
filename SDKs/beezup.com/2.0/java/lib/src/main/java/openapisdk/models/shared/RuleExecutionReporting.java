package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class RuleExecutionReporting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activeAffectedProductCount")
    public Long activeAffectedProductCount;
    public RuleExecutionReporting withActiveAffectedProductCount(Long activeAffectedProductCount) {
        this.activeAffectedProductCount = activeAffectedProductCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("affectedChannelCount")
    public Long affectedChannelCount;
    public RuleExecutionReporting withAffectedChannelCount(Long affectedChannelCount) {
        this.affectedChannelCount = affectedChannelCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("affectedProductCount")
    public Long affectedProductCount;
    public RuleExecutionReporting withAffectedProductCount(Long affectedProductCount) {
        this.affectedProductCount = affectedProductCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("completedUtcDate")
    public OffsetDateTime completedUtcDate;
    public RuleExecutionReporting withCompletedUtcDate(OffsetDateTime completedUtcDate) {
        this.completedUtcDate = completedUtcDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorType")
    public RuleExecutionReportingErrorTypeEnum errorType;
    public RuleExecutionReporting withErrorType(RuleExecutionReportingErrorTypeEnum errorType) {
        this.errorType = errorType;
        return this;
    }
    @JsonProperty("executionSource")
    public RuleExecutionReportingExecutionSourceEnum executionSource;
    public RuleExecutionReporting withExecutionSource(RuleExecutionReportingExecutionSourceEnum executionSource) {
        this.executionSource = executionSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public RuleExecutionReportingLinks links;
    public RuleExecutionReporting withLinks(RuleExecutionReportingLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("optimisationActionName")
    public OptimisationActionNameEnum optimisationActionName;
    public RuleExecutionReporting withOptimisationActionName(OptimisationActionNameEnum optimisationActionName) {
        this.optimisationActionName = optimisationActionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportUrl")
    public String reportUrl;
    public RuleExecutionReporting withReportUrl(String reportUrl) {
        this.reportUrl = reportUrl;
        return this;
    }
    @JsonProperty("ruleId")
    public String ruleId;
    public RuleExecutionReporting withRuleId(String ruleId) {
        this.ruleId = ruleId;
        return this;
    }
    @JsonProperty("ruleName")
    public String ruleName;
    public RuleExecutionReporting withRuleName(String ruleName) {
        this.ruleName = ruleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("startedUtcDate")
    public OffsetDateTime startedUtcDate;
    public RuleExecutionReporting withStartedUtcDate(OffsetDateTime startedUtcDate) {
        this.startedUtcDate = startedUtcDate;
        return this;
    }
    @JsonProperty("status")
    public RuleExecutionReportingStatusEnum status;
    public RuleExecutionReporting withStatus(RuleExecutionReportingStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userId")
    public String userId;
    public RuleExecutionReporting withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}