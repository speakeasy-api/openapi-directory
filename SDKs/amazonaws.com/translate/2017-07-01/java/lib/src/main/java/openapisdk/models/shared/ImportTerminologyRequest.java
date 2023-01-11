package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImportTerminologyRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public ImportTerminologyRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EncryptionKey")
    public EncryptionKey encryptionKey;
    public ImportTerminologyRequest withEncryptionKey(EncryptionKey encryptionKey) {
        this.encryptionKey = encryptionKey;
        return this;
    }
    @JsonProperty("MergeStrategy")
    public MergeStrategyEnum mergeStrategy;
    public ImportTerminologyRequest withMergeStrategy(MergeStrategyEnum mergeStrategy) {
        this.mergeStrategy = mergeStrategy;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public ImportTerminologyRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("TerminologyData")
    public TerminologyData terminologyData;
    public ImportTerminologyRequest withTerminologyData(TerminologyData terminologyData) {
        this.terminologyData = terminologyData;
        return this;
    }
}