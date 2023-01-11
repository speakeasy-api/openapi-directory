package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CodeScanningAlertRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CodeScanningAlertRule withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("full_description")
    public String fullDescription;
    public CodeScanningAlertRule withFullDescription(String fullDescription) {
        this.fullDescription = fullDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("help")
    public String help;
    public CodeScanningAlertRule withHelp(String help) {
        this.help = help;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public CodeScanningAlertRule withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CodeScanningAlertRule withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("severity")
    public CodeScanningAlertRuleSeverityEnum severity;
    public CodeScanningAlertRule withSeverity(CodeScanningAlertRuleSeverityEnum severity) {
        this.severity = severity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public CodeScanningAlertRule withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
}