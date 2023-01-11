package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDocumentAnalysisResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnalyzeDocumentModelVersion")
    public String analyzeDocumentModelVersion;
    public GetDocumentAnalysisResponse withAnalyzeDocumentModelVersion(String analyzeDocumentModelVersion) {
        this.analyzeDocumentModelVersion = analyzeDocumentModelVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Blocks")
    public Block[] blocks;
    public GetDocumentAnalysisResponse withBlocks(Block[] blocks) {
        this.blocks = blocks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DocumentMetadata")
    public DocumentMetadata documentMetadata;
    public GetDocumentAnalysisResponse withDocumentMetadata(DocumentMetadata documentMetadata) {
        this.documentMetadata = documentMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobStatus")
    public JobStatusEnum jobStatus;
    public GetDocumentAnalysisResponse withJobStatus(JobStatusEnum jobStatus) {
        this.jobStatus = jobStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetDocumentAnalysisResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatusMessage")
    public String statusMessage;
    public GetDocumentAnalysisResponse withStatusMessage(String statusMessage) {
        this.statusMessage = statusMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Warnings")
    public Warning[] warnings;
    public GetDocumentAnalysisResponse withWarnings(Warning[] warnings) {
        this.warnings = warnings;
        return this;
    }
}