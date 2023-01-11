package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetMergeCommitOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("baseCommitId")
    public String baseCommitId;
    public GetMergeCommitOutput withBaseCommitId(String baseCommitId) {
        this.baseCommitId = baseCommitId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationCommitId")
    public String destinationCommitId;
    public GetMergeCommitOutput withDestinationCommitId(String destinationCommitId) {
        this.destinationCommitId = destinationCommitId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mergedCommitId")
    public String mergedCommitId;
    public GetMergeCommitOutput withMergedCommitId(String mergedCommitId) {
        this.mergedCommitId = mergedCommitId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceCommitId")
    public String sourceCommitId;
    public GetMergeCommitOutput withSourceCommitId(String sourceCommitId) {
        this.sourceCommitId = sourceCommitId;
        return this;
    }
}