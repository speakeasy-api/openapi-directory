package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DetectDocumentTextResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Blocks")
    public Block[] blocks;
    public DetectDocumentTextResponse withBlocks(Block[] blocks) {
        this.blocks = blocks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DetectDocumentTextModelVersion")
    public String detectDocumentTextModelVersion;
    public DetectDocumentTextResponse withDetectDocumentTextModelVersion(String detectDocumentTextModelVersion) {
        this.detectDocumentTextModelVersion = detectDocumentTextModelVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DocumentMetadata")
    public DocumentMetadata documentMetadata;
    public DetectDocumentTextResponse withDocumentMetadata(DocumentMetadata documentMetadata) {
        this.documentMetadata = documentMetadata;
        return this;
    }
}