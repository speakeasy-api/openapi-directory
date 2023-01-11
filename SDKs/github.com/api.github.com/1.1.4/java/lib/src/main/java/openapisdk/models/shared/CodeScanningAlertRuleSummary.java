package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CodeScanningAlertRuleSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CodeScanningAlertRuleSummary withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public CodeScanningAlertRuleSummary withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CodeScanningAlertRuleSummary withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("severity")
    public CodeScanningAlertRuleSummarySeverityEnum severity;
    public CodeScanningAlertRuleSummary withSeverity(CodeScanningAlertRuleSummarySeverityEnum severity) {
        this.severity = severity;
        return this;
    }
}