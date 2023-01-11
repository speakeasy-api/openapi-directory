package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class CodeScanningAnalysis {
    @JsonProperty("analysis_key")
    public String analysisKey;
    public CodeScanningAnalysis withAnalysisKey(String analysisKey) {
        this.analysisKey = analysisKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public String category;
    public CodeScanningAnalysis withCategory(String category) {
        this.category = category;
        return this;
    }
    @JsonProperty("commit_sha")
    public String commitSha;
    public CodeScanningAnalysis withCommitSha(String commitSha) {
        this.commitSha = commitSha;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public CodeScanningAnalysis withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("deletable")
    public Boolean deletable;
    public CodeScanningAnalysis withDeletable(Boolean deletable) {
        this.deletable = deletable;
        return this;
    }
    @JsonProperty("environment")
    public String environment;
    public CodeScanningAnalysis withEnvironment(String environment) {
        this.environment = environment;
        return this;
    }
    @JsonProperty("error")
    public String error;
    public CodeScanningAnalysis withError(String error) {
        this.error = error;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public CodeScanningAnalysis withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("ref")
    public String ref;
    public CodeScanningAnalysis withRef(String ref) {
        this.ref = ref;
        return this;
    }
    @JsonProperty("results_count")
    public Long resultsCount;
    public CodeScanningAnalysis withResultsCount(Long resultsCount) {
        this.resultsCount = resultsCount;
        return this;
    }
    @JsonProperty("rules_count")
    public Long rulesCount;
    public CodeScanningAnalysis withRulesCount(Long rulesCount) {
        this.rulesCount = rulesCount;
        return this;
    }
    @JsonProperty("sarif_id")
    public String sarifId;
    public CodeScanningAnalysis withSarifId(String sarifId) {
        this.sarifId = sarifId;
        return this;
    }
    @JsonProperty("tool")
    public CodeScanningAnalysisTool tool;
    public CodeScanningAnalysis withTool(CodeScanningAnalysisTool tool) {
        this.tool = tool;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public CodeScanningAnalysis withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonProperty("warning")
    public String warning;
    public CodeScanningAnalysis withWarning(String warning) {
        this.warning = warning;
        return this;
    }
}