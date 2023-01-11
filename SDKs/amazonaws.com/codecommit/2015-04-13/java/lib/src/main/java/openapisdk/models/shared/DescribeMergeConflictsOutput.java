package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeMergeConflictsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("baseCommitId")
    public String baseCommitId;
    public DescribeMergeConflictsOutput withBaseCommitId(String baseCommitId) {
        this.baseCommitId = baseCommitId;
        return this;
    }
    @JsonProperty("conflictMetadata")
    public ConflictMetadata conflictMetadata;
    public DescribeMergeConflictsOutput withConflictMetadata(ConflictMetadata conflictMetadata) {
        this.conflictMetadata = conflictMetadata;
        return this;
    }
    @JsonProperty("destinationCommitId")
    public String destinationCommitId;
    public DescribeMergeConflictsOutput withDestinationCommitId(String destinationCommitId) {
        this.destinationCommitId = destinationCommitId;
        return this;
    }
    @JsonProperty("mergeHunks")
    public MergeHunk[] mergeHunks;
    public DescribeMergeConflictsOutput withMergeHunks(MergeHunk[] mergeHunks) {
        this.mergeHunks = mergeHunks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeMergeConflictsOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("sourceCommitId")
    public String sourceCommitId;
    public DescribeMergeConflictsOutput withSourceCommitId(String sourceCommitId) {
        this.sourceCommitId = sourceCommitId;
        return this;
    }
}