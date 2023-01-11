package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class CodeScanningAlert {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public CodeScanningAlert withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("dismissed_at")
    public OffsetDateTime dismissedAt;
    public CodeScanningAlert withDismissedAt(OffsetDateTime dismissedAt) {
        this.dismissedAt = dismissedAt;
        return this;
    }
    @JsonProperty("dismissed_by")
    public SimpleUser dismissedBy;
    public CodeScanningAlert withDismissedBy(SimpleUser dismissedBy) {
        this.dismissedBy = dismissedBy;
        return this;
    }
    @JsonProperty("dismissed_reason")
    public CodeScanningAlertDismissedReasonEnum dismissedReason;
    public CodeScanningAlert withDismissedReason(CodeScanningAlertDismissedReasonEnum dismissedReason) {
        this.dismissedReason = dismissedReason;
        return this;
    }
    @JsonProperty("html_url")
    public String htmlUrl;
    public CodeScanningAlert withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instances")
    public Object instances;
    public CodeScanningAlert withInstances(Object instances) {
        this.instances = instances;
        return this;
    }
    @JsonProperty("number")
    public Long number;
    public CodeScanningAlert withNumber(Long number) {
        this.number = number;
        return this;
    }
    @JsonProperty("rule")
    public CodeScanningAlertRule rule;
    public CodeScanningAlert withRule(CodeScanningAlertRule rule) {
        this.rule = rule;
        return this;
    }
    @JsonProperty("state")
    public CodeScanningAlertStateEnum state;
    public CodeScanningAlert withState(CodeScanningAlertStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonProperty("tool")
    public CodeScanningAnalysisTool tool;
    public CodeScanningAlert withTool(CodeScanningAnalysisTool tool) {
        this.tool = tool;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public CodeScanningAlert withUrl(String url) {
        this.url = url;
        return this;
    }
}