package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class CodeScanningAlertItems {
    @JsonProperty("classification")
    public CodeScanningAlertClassificationEnum classification;
    public CodeScanningAlertItems withClassification(CodeScanningAlertClassificationEnum classification) {
        this.classification = classification;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public CodeScanningAlertItems withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("dismissed_at")
    public OffsetDateTime dismissedAt;
    public CodeScanningAlertItems withDismissedAt(OffsetDateTime dismissedAt) {
        this.dismissedAt = dismissedAt;
        return this;
    }
    @JsonProperty("dismissed_by")
    public SimpleUser dismissedBy;
    public CodeScanningAlertItems withDismissedBy(SimpleUser dismissedBy) {
        this.dismissedBy = dismissedBy;
        return this;
    }
    @JsonProperty("dismissed_reason")
    public CodeScanningAlertDismissedReasonEnum dismissedReason;
    public CodeScanningAlertItems withDismissedReason(CodeScanningAlertDismissedReasonEnum dismissedReason) {
        this.dismissedReason = dismissedReason;
        return this;
    }
    @JsonProperty("html_url")
    public String htmlUrl;
    public CodeScanningAlertItems withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonProperty("instance")
    public CodeScanningAlertInstance instance;
    public CodeScanningAlertItems withInstance(CodeScanningAlertInstance instance) {
        this.instance = instance;
        return this;
    }
    @JsonProperty("number")
    public Long number;
    public CodeScanningAlertItems withNumber(Long number) {
        this.number = number;
        return this;
    }
    @JsonProperty("rule")
    public CodeScanningAlertRuleSummary rule;
    public CodeScanningAlertItems withRule(CodeScanningAlertRuleSummary rule) {
        this.rule = rule;
        return this;
    }
    @JsonProperty("state")
    public CodeScanningAlertStateEnum state;
    public CodeScanningAlertItems withState(CodeScanningAlertStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonProperty("tool")
    public CodeScanningAnalysisTool tool;
    public CodeScanningAlertItems withTool(CodeScanningAnalysisTool tool) {
        this.tool = tool;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public CodeScanningAlertItems withUrl(String url) {
        this.url = url;
        return this;
    }
}