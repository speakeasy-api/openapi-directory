package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CodeScanningAlertInstance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("analysis_key")
    public String analysisKey;
    public CodeScanningAlertInstance withAnalysisKey(String analysisKey) {
        this.analysisKey = analysisKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("classifications")
    public CodeScanningAlertClassificationEnum[] classifications;
    public CodeScanningAlertInstance withClassifications(CodeScanningAlertClassificationEnum[] classifications) {
        this.classifications = classifications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commit_sha")
    public String commitSha;
    public CodeScanningAlertInstance withCommitSha(String commitSha) {
        this.commitSha = commitSha;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment")
    public String environment;
    public CodeScanningAlertInstance withEnvironment(String environment) {
        this.environment = environment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("html_url")
    public String htmlUrl;
    public CodeScanningAlertInstance withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public CodeScanningAlertLocation location;
    public CodeScanningAlertInstance withLocation(CodeScanningAlertLocation location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public CodeScanningAlertInstanceMessage message;
    public CodeScanningAlertInstance withMessage(CodeScanningAlertInstanceMessage message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ref")
    public String ref;
    public CodeScanningAlertInstance withRef(String ref) {
        this.ref = ref;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public CodeScanningAlertStateEnum state;
    public CodeScanningAlertInstance withState(CodeScanningAlertStateEnum state) {
        this.state = state;
        return this;
    }
}