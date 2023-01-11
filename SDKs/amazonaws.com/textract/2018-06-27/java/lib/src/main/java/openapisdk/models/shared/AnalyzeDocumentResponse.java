package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AnalyzeDocumentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnalyzeDocumentModelVersion")
    public String analyzeDocumentModelVersion;
    public AnalyzeDocumentResponse withAnalyzeDocumentModelVersion(String analyzeDocumentModelVersion) {
        this.analyzeDocumentModelVersion = analyzeDocumentModelVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Blocks")
    public Block[] blocks;
    public AnalyzeDocumentResponse withBlocks(Block[] blocks) {
        this.blocks = blocks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DocumentMetadata")
    public DocumentMetadata documentMetadata;
    public AnalyzeDocumentResponse withDocumentMetadata(DocumentMetadata documentMetadata) {
        this.documentMetadata = documentMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HumanLoopActivationOutput")
    public HumanLoopActivationOutput humanLoopActivationOutput;
    public AnalyzeDocumentResponse withHumanLoopActivationOutput(HumanLoopActivationOutput humanLoopActivationOutput) {
        this.humanLoopActivationOutput = humanLoopActivationOutput;
        return this;
    }
}